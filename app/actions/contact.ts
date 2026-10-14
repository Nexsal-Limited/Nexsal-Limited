"use server";

import { headers } from "next/headers";
import { saveMessage } from "@/utilities/server/inbox";

export type ContactState = { status: "idle" | "success" | "error"; message: string };
const attempts = new Map<string, number[]>();

function value(formData: FormData, key: string, maximum: number) {
  const field = formData.get(key);
  return typeof field === "string" ? field.trim().slice(0, maximum) : "";
}

function canSubmit(identifier: string) {
  const now = Date.now();
  const recent = (attempts.get(identifier) ?? []).filter((attempt) => now - attempt < 60 * 60 * 1000);
  if (recent.length >= 5) return false;
  attempts.set(identifier, [...recent, now]);
  return true;
}

export async function submitContact(_state: ContactState, formData: FormData): Promise<ContactState> {
  if (value(formData, "website", 100)) return { status: "success", message: "Thanks. Your inquiry has been received." };

  const requestHeaders = await headers();
  const identifier = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!canSubmit(identifier)) return { status: "error", message: "Too many inquiries were submitted. Please try again later." };

  const name = value(formData, "name", 100);
  const email = value(formData, "email", 254).toLowerCase();
  const company = value(formData, "company", 120);
  const interest = value(formData, "interest", 80);
  const message = value(formData, "message", 4000);

  if (name.length < 2 || message.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Please provide a valid name, email address, and a little more detail." };
  }

  try {
    await saveMessage({ name, email, company, interest, message });
    return { status: "success", message: "Thanks. Your inquiry is now in the NexSal inbox." };
  } catch {
    return { status: "error", message: "We could not save your inquiry. Please try WhatsApp or email instead." };
  }
}
