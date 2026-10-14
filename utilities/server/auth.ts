import "server-only";

import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const SESSION_COOKIE = "nexsal_admin_session";
const SESSION_DURATION = 60 * 60 * 8;

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

function safeEqual(left: string, right: string) {
  return timingSafeEqual(digest(left), digest(right));
}

function signature(payload: string) {
  const secret = process.env.AUTH_SECRET;
  if (!secret || secret.length < 32) return null;
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

export function credentialsAreConfigured() {
  return Boolean(process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD && process.env.AUTH_SECRET && process.env.AUTH_SECRET.length >= 32);
}

export function verifyCredentials(email: string, password: string) {
  if (!credentialsAreConfigured()) return false;
  return safeEqual(email.trim().toLowerCase(), process.env.ADMIN_EMAIL!.trim().toLowerCase()) && safeEqual(password, process.env.ADMIN_PASSWORD!);
}

export function createSessionToken() {
  const expires = Math.floor(Date.now() / 1000) + SESSION_DURATION;
  const payload = String(expires);
  const signed = signature(payload);
  return signed ? `${payload}.${signed}` : null;
}

export async function isAuthorized() {
  const value = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!value) return false;

  const [expires, providedSignature] = value.split(".");
  const expectedSignature = signature(expires);
  if (!expires || !providedSignature || !expectedSignature || !safeEqual(providedSignature, expectedSignature)) return false;

  const expiryTime = Number(expires);
  return Number.isFinite(expiryTime) && expiryTime > Math.floor(Date.now() / 1000);
}

export const sessionOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict" as const,
  path: "/",
  maxAge: SESSION_DURATION,
  priority: "high" as const,
};
