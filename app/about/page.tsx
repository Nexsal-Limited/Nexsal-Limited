import type { Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "@/components/call-to-action";
import { Code, Network, Spark } from "@/components/icons";
import { PageFrame } from "@/components/page-frame";
import { SectionHeading } from "@/components/section-heading";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export const metadata: Metadata = {
  title: "About us",
  description: "Meet NexSal, a product-minded technology company creating clearer digital systems for ambitious organizations.",
};

const values = [
  [Spark, "Clarity wins", "We reduce noise, expose the important decisions, and make complexity understandable."],
  [Network, "Systems thinking", "We design for the whole operation, not an isolated screen or a temporary patch."],
  [Code, "Useful craft", "Quality matters most when it makes a product more dependable, inclusive, and useful."],
] as const;

export default function AboutPage() {
  return (
    <PageFrame>
      <section className={s.classes.pageHero} aria-labelledby="about-title">
        <div className={c.classes.container}>
          <p className={c.classes.eyebrow}>About NexSal</p>
          <h1 id="about-title" className={s.classes.pageHeroTitle}>Technology should make progress feel obvious.</h1>
          <p className={s.classes.pageHeroCopy}>We build focused digital products for organizations ready to replace fragmented work with connected momentum.</p>
        </div>
      </section>
      <section className={c.classes.section} aria-labelledby="story-title">
        <div className={[c.classes.container, s.classes.storyGrid].join(" ")}>
          <div id="story-title"><SectionHeading eyebrow="Our story" title="A better system starts with a better question." /></div>
          <div className={s.classes.storyCopy}>
            <p>NexSal began with a simple observation: teams rarely need more software. They need the software they already use to behave like <strong>one coherent system</strong>.</p>
            <p>We bring product strategy, interface design, and software engineering into one close-working practice. That lets us solve the operational problem, not just decorate its symptoms.</p>
            <p>Today, our focus is building modular products that help growing organizations coordinate work, connect data, and govern access without giving up speed.</p>
          </div>
        </div>
      </section>
      <section className={c.classes.section} aria-labelledby="founders-title">
        <div className={c.classes.container}>
          <div id="founders-title"><SectionHeading eyebrow="Leadership" title="Meet the co-founders." copy="NexSal is led by a close partnership across product vision, technology, and company building." /></div>
          <div className={s.classes.foundersGrid}>
            <article className={[c.classes.card, s.classes.founderCard, s.classes.founderCardHover].join(" ")}>
              <div className={s.classes.founderPortrait}><Image src="/team-elkanah.svg" alt="Placeholder portrait for Elkanah Cole" width={640} height={760} /></div>
              <div className={s.classes.founderDetails}><span className={c.classes.tag}>Co-founder</span><h3>Elkanah Cole</h3><p>Building NexSal’s product vision around clearer, more connected ways of working.</p><strong>Product & Strategy</strong></div>
            </article>
            <article className={[c.classes.card, s.classes.founderCard, s.classes.founderCardHover].join(" ")}>
              <div className={s.classes.founderPortrait}><Image src="/team-favour.svg" alt="Placeholder portrait for Favour Macurley" width={640} height={760} /></div>
              <div className={s.classes.founderDetails}><span className={c.classes.tag}>Co-founder</span><h3>Favour Macurley</h3><p>Shaping the technology and operations that turn ambitious ideas into dependable systems.</p><strong>Technology & Operations</strong></div>
            </article>
          </div>
        </div>
      </section>
      <section id="values" className={c.classes.section} aria-labelledby="values-title">
        <div className={c.classes.container}>
          <div className={c.classes.headingRow}><div id="values-title"><SectionHeading eyebrow="What guides us" title="Principles over theatre." copy="A small set of beliefs keeps our decisions consistent as the work grows." /></div></div>
          <div className={s.classes.valuesGrid}>
            {values.map(([Icon, title, copy]) => <article className={[c.classes.card, s.classes.valueCard].join(" ")} key={title}><span className={c.classes.iconBox}><Icon className={c.classes.icon} /></span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>
      <section className={c.classes.sectionCompact} aria-label="Company facts">
        <div className={c.classes.container}><div className={s.classes.statsGrid}><div className={s.classes.stat}><strong>3</strong><span>connected product lines</span></div><div className={s.classes.stat}><strong>1</strong><span>shared design philosophy</span></div><div className={s.classes.stat}><strong>100%</strong><span>outcome-focused delivery</span></div><div className={s.classes.stat}><strong>Global</strong><span>collaboration by default</span></div></div></div>
      </section>
      <CallToAction />
    </PageFrame>
  );
}
