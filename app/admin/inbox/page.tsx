import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { redirect } from "next/navigation";
import { logout } from "@/app/actions/auth";
import { Button } from "@/components/button";
import { PageFrame } from "@/components/page-frame";
import { adminStyles as a } from "@/utilities/styles/admin.style";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { isAuthorized } from "@/utilities/server/auth";
import { getMessages } from "@/utilities/server/inbox";

export const metadata: Metadata = {
  title: "Inquiry inbox",
  robots: { index: false, follow: false, noarchive: true },
};

function readableDate(value: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(new Date(value));
}

async function InboxContent() {
  await connection();
  if (!(await isAuthorized())) redirect("/admin/login");
  const messages = await getMessages();

  return (
    <PageFrame>
      <section className={a.classes.inboxPage} aria-labelledby="inbox-title">
        <div className={c.classes.container}>
          <header className={a.classes.inboxHeader}>
            <div><p className={c.classes.eyebrow}>Private workspace</p><h1 id="inbox-title">Inquiry inbox</h1><div className={a.classes.inboxMeta}><span>{messages.length} {messages.length === 1 ? "message" : "messages"}</span><span aria-hidden="true">·</span><span>Newest first</span></div></div>
            <form action={logout}><Button type="submit" variant="ghost" size="small">Sign out</Button></form>
          </header>
          {messages.length ? (
            <div className={a.classes.inboxList}>
              {messages.map((message) => (
                <article className={a.classes.messageCard} key={message.id}>
                  <header className={a.classes.sender}><span className={c.classes.tag}>{message.interest || "General inquiry"}</span><h2>{message.name}</h2><a href={`mailto:${message.email}`}>{message.email}</a><p>{message.company || "No company provided"}</p></header>
                  <div className={a.classes.messageBody}><p>{message.message}</p><time dateTime={message.receivedAt}>{readableDate(message.receivedAt)} UTC</time></div>
                </article>
              ))}
            </div>
          ) : (
            <div className={a.classes.emptyInbox}><h2>The inbox is clear</h2><p>New contact form inquiries will appear here.</p></div>
          )}
        </div>
      </section>
    </PageFrame>
  );
}

export default function InboxPage() {
  return <Suspense fallback={<div className={a.classes.loading}>Opening secure inbox...</div>}><InboxContent /></Suspense>;
}
