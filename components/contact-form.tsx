"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Button } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";
import { adminStyles as a } from "@/utilities/styles/admin.style";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

const initialState: ContactState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <form className={s.classes.form} action={action} aria-label="Project inquiry">
      <div className={a.classes.honeypot} aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <div className={s.classes.field}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
      <div className={s.classes.field}><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
      <div className={s.classes.field}><label htmlFor="company">Company</label><input id="company" name="company" autoComplete="organization" maxLength={120} /></div>
      <div className={s.classes.field}><label htmlFor="interest">What can we help with?</label><select id="interest" name="interest" defaultValue=""><option value="" disabled>Select a product</option><option>NexFlow</option><option>NexConnect</option><option>NexGuard</option><option>Custom solution</option></select></div>
      <div className={[s.classes.field, s.classes.fieldFull].join(" ")}><label htmlFor="message">Tell us about the opportunity</label><textarea id="message" name="message" minLength={10} maxLength={4000} required /></div>
      <div className={s.classes.fieldFull}><Button type="submit" variant="accent" disabled={pending}>{pending ? "Sending..." : state.status === "success" ? "Inquiry received" : "Send inquiry"} <ArrowUpRight className={c.classes.icon} /></Button></div>
      <p className={s.classes.formNote} aria-live="polite">{state.message || "By submitting, you agree that NexSal may contact you about this inquiry."}</p>
    </form>
  );
}
