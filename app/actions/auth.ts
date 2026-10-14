"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { createSessionToken, credentialsAreConfigured, SESSION_COOKIE, sessionOptions, verifyCredentials } from "@/utilities/server/auth";

export type LoginState = { error: string };
const attempts = new Map<string, { count: number; resetAt: number }>();

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
  if (!credentialsAreConfigured()) return { error: "Admin access has not been configured on this server." };

  const requestHeaders = await headers();
  const identifier = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const current = attempts.get(identifier);
  const attempt = current && current.resetAt > now ? current : { count: 0, resetAt: now + 15 * 60 * 1000 };
  if (attempt.count >= 5) return { error: "Too many attempts. Try again in 15 minutes." };

  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!verifyCredentials(email, password)) {
    attempts.set(identifier, { ...attempt, count: attempt.count + 1 });
    return { error: "The email or password is incorrect." };
  }

  const token = createSessionToken();
  if (!token) return { error: "Admin access has not been configured on this server." };
  attempts.delete(identifier);
  (await cookies()).set(SESSION_COOKIE, token, sessionOptions);
  redirect("/admin/inbox");
}

export async function logout() {
  (await cookies()).delete(SESSION_COOKIE);
  redirect("/");
}
