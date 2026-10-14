import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/utilities/content";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to NexSal about connected operations, integrations, governance, or a custom digital product.",
};

export default function ContactPage() {
  return (
    <PageFrame>
      <section className={s.classes.pageHero} aria-labelledby="contact-title">
        <div className={c.classes.container}>
          <p className={c.classes.eyebrow}>Start a conversation</p>
          <h1 id="contact-title" className={s.classes.pageHeroTitle}>Bring us the bottleneck.</h1>
          <p className={s.classes.pageHeroCopy}>Tell us what is slowing the team down. We’ll help you find the clearest path forward.</p>
        </div>
      </section>
      <section className={c.classes.sectionCompact} aria-label="Contact NexSal">
        <div className={[c.classes.container, s.classes.contactGrid].join(" ")}>
          <div>
            <SectionHeading eyebrow="Contact" title="Let’s make the next step useful." copy="Share a little context and we’ll respond with relevant questions, not a generic sales sequence." />
            <address className={s.classes.contactInfo}>
              <div className={s.classes.contactItem}><small>Email</small><strong><a href="mailto:hello@nexsal.com">hello@nexsal.com</a></strong></div>
              <div className={s.classes.contactItem}><small>Response time</small><strong>Within two business days</strong></div>
              <div className={s.classes.contactItem}><small>Availability</small><strong>Remote collaboration worldwide</strong></div>
            </address>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className={c.classes.section} aria-labelledby="faq-title">
        <div className={c.classes.container}>
          <div id="faq-title"><SectionHeading eyebrow="Common questions" title="A few useful answers." centered /></div>
          <div className={s.classes.faqList}>{faqs.map(([question, answer]) => <details className={s.classes.faq} key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>
    </PageFrame>
  );
}
