import type { Metadata } from "next";
import { CallToAction } from "@/components/call-to-action";
import { PageFrame } from "@/components/page-frame";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/utilities/content";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore NexFlow, NexConnect, and NexGuard: connected products for operations, integrations, and governance.",
};

export default function ProductsPage() {
  return (
    <PageFrame>
      <section className={s.classes.pageHero} aria-labelledby="products-page-title">
        <div className={c.classes.container}>
          <p className={c.classes.eyebrow}>The NexSal product suite</p>
          <h1 id="products-page-title" className={s.classes.pageHeroTitle}>One system. Three ways to move better.</h1>
          <p className={s.classes.pageHeroCopy}>Modular products that solve today’s bottleneck and create a stronger operating foundation for tomorrow.</p>
        </div>
      </section>
      <section className={c.classes.sectionCompact} aria-label="NexSal products">
        <div className={c.classes.container}>
          <div className={s.classes.productGrid}>{products.map((product) => <ProductCard key={product.slug} product={product} detailed />)}</div>
        </div>
      </section>
      <section className={c.classes.section} aria-labelledby="capabilities-title">
        <div className={c.classes.container}>
          <div className={c.classes.headingRow}><div id="capabilities-title"><SectionHeading eyebrow="Shared foundation" title="Enterprise capability, human experience." copy="Every product follows the same standards for usability, security, and interoperability." /></div></div>
          <div className={s.classes.detailGrid}>
            <article className={[c.classes.card, s.classes.detailCard].join(" ")}><span className={c.classes.tag}>Architecture</span><h2>Built to connect</h2><p>Open integration patterns keep your systems useful and your data portable.</p><ul><li>API-first foundations</li><li>Reliable event handling</li><li>Documented data models</li></ul></article>
            <article className={[c.classes.card, s.classes.detailCard].join(" ")}><span className={c.classes.tag}>Experience</span><h2>Made for real work</h2><p>Interfaces stay calm and clear even when the operation behind them is complex.</p><ul><li>Accessible by default</li><li>Responsive workspaces</li><li>Role-aware experiences</li></ul></article>
            <article className={[c.classes.card, s.classes.detailCard].join(" ")}><span className={c.classes.tag}>Security</span><h2>Trust at every layer</h2><p>Governance is designed into workflows rather than added after launch.</p><ul><li>Principle of least privilege</li><li>Audit-ready activity</li><li>Secure integration patterns</li></ul></article>
            <article className={[c.classes.card, s.classes.detailCard].join(" ")}><span className={c.classes.tag}>Growth</span><h2>Scale without a rebuild</h2><p>Begin with a focused use case, then expand on a consistent platform.</p><ul><li>Modular capabilities</li><li>Reusable automation</li><li>Operational analytics</li></ul></article>
          </div>
        </div>
      </section>
      <CallToAction />
    </PageFrame>
  );
}
