import { ArrowUpRight } from "@/components/icons";
import { Button } from "@/components/button";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export function CallToAction() {
  return (
    <section className={c.classes.section} aria-labelledby="cta-title">
      <div className={c.classes.container}>
        <div className={s.classes.cta}>
          <div className={s.classes.ctaOrb} aria-hidden="true" />
          <div className={s.classes.ctaGrid}>
            <div><p className={c.classes.eyebrow}>Your next move</p><h2 id="cta-title" className={s.classes.ctaTitle}>Turn complex work into clear momentum.</h2></div>
            <Button href="/contact" variant="accent">Talk to NexSal <ArrowUpRight className={c.classes.icon} /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}
