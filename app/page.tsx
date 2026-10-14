import { ArrowUpRight } from "@/components/icons";
import { Button } from "@/components/button";
import { CallToAction } from "@/components/call-to-action";
import { DashboardVisual } from "@/components/dashboard-visual";
import { InteractiveHero } from "@/components/interactive-hero";
import { PageFrame } from "@/components/page-frame";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { processSteps, products } from "@/utilities/content";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export default function HomePage() {
  return (
    <PageFrame>
      <InteractiveHero>
        <div className={[c.classes.container, s.classes.heroGrid].join(" ")}>
          <div>
            <p className={c.classes.eyebrow}>Systems for the next stage</p>
            <h1 id="home-title" className={s.classes.heroTitle}>Make work <span className={s.classes.heroAccent}>flow forward.</span></h1>
            <p className={s.classes.heroCopy}>NexSal connects operations, tools, and teams in one clear digital system, built around the way your business actually moves.</p>
            <div className={s.classes.heroActions}>
              <Button href="/contact" variant="accent">Build with us <ArrowUpRight className={c.classes.icon} /></Button>
              <Button href="/products" variant="ghost">Explore products</Button>
            </div>
            <div className={s.classes.trustedRow}>
              <div className={s.classes.avatars} aria-hidden="true"><span>AK</span><span>JM</span><span>SO</span></div>
              <span>Built with operators, founders, and ambitious teams.</span>
            </div>
          </div>
          <DashboardVisual />
        </div>
      </InteractiveHero>

      <section className={s.classes.proofStrip} aria-label="Teams served">
        <div className={[c.classes.container, s.classes.proofGrid].join(" ")}>
          <p className={s.classes.proofLabel}>One connected foundation<br />for modern teams</p>
          <span className={s.classes.wordmark}>Northstar</span><span className={s.classes.wordmark}>Kinetic</span><span className={s.classes.wordmark}>Vantage</span><span className={s.classes.wordmark}>Form&Co.</span>
        </div>
      </section>

      <section className={c.classes.section} aria-labelledby="products-title">
        <div className={c.classes.container}>
          <div className={c.classes.headingRow}>
            <div id="products-title"><SectionHeading eyebrow="NexSal suite" title="Built to work together." copy="Start with the pressure point that matters now. Add capabilities as your operation grows." /></div>
            <Button href="/products" variant="ghost" size="small">View all products <ArrowUpRight className={c.classes.icon} /></Button>
          </div>
          <div className={s.classes.productGrid}>{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
        </div>
      </section>

      <section className={s.classes.darkSection} aria-labelledby="process-title">
        <div className={[c.classes.container, s.classes.processGrid].join(" ")}>
          <div className={s.classes.processIntro} id="process-title"><SectionHeading eyebrow="How we work" title="Progress without the theatre." copy="A focused delivery model that keeps your team close to the decisions and the outcome." /></div>
          <ol className={s.classes.processList}>
            {processSteps.map(([number, title, copy]) => <li className={s.classes.processItem} key={number}><span className={s.classes.processNumber}>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className={c.classes.section} aria-label="NexSal impact statistics">
        <div className={c.classes.container}>
          <div className={s.classes.statsGrid}>
            <div className={s.classes.stat}><strong>42%</strong><span>less manual coordination</span></div>
            <div className={s.classes.stat}><strong>3.2x</strong><span>faster workflow completion</span></div>
            <div className={s.classes.stat}><strong>99.9%</strong><span>platform availability target</span></div>
            <div className={s.classes.stat}><strong>12+</strong><span>core integration patterns</span></div>
          </div>
        </div>
      </section>

      <section className={c.classes.sectionCompact} aria-labelledby="customer-story">
        <div className={c.classes.container}>
          <div className={s.classes.quote}>
            <article className={s.classes.quoteMain}><span className={c.classes.tag}>Customer signal</span><blockquote id="customer-story">“NexSal gave our team one shared picture of the work. Decisions happen faster because nothing gets lost between tools.”</blockquote><p>Maya Okafor · COO, Northstar Labs</p></article>
            <aside className={s.classes.quoteSide}><strong>06</strong><p>Disconnected workflows consolidated into one operational view during the pilot.</p></aside>
          </div>
        </div>
      </section>
      <CallToAction />
    </PageFrame>
  );
}
