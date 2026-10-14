import { ArrowUpRight, Shield } from "@/components/icons";
import { Card } from "@/components/card";
import type { products } from "@/utilities/content";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as s } from "@/utilities/styles/pages.style";

type Product = (typeof products)[number];

function ProductVisual({ type }: { type: Product["visual"] }) {
  if (type === "window") {
    return <div className={s.classes.miniWindow} aria-hidden="true"><div className={s.classes.miniTop}><span /><span /><span /></div><div className={s.classes.miniRows}><span /><span /><span /><span /></div></div>;
  }
  if (type === "nodes") {
    return <div className={s.classes.nodes} aria-hidden="true"><span>CRM</span><span>API</span><span>DATA</span></div>;
  }
  return <div className={s.classes.shield} aria-hidden="true"><Shield className={c.classes.icon} /></div>;
}

export function ProductCard({ product, detailed = false }: { product: Product; detailed?: boolean }) {
  const visualClass = product.visual === "nodes" ? s.classes.productVisualDark : product.visual === "shield" ? s.classes.productVisualAccent : "";

  return (
    <Card className={s.classes.productCard}>
      <div className={[s.classes.productVisual, visualClass].filter(Boolean).join(" ")}>
        <ProductVisual type={product.visual} />
      </div>
      <div className={s.classes.productContent}>
        <span className={c.classes.tag}>{product.label}</span>
        <h3 id={product.slug}>{product.name}</h3>
        <p>{product.description}</p>
        {detailed ? (
          <ul className={s.classes.productFeatures}>
            {product.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        ) : (
          <a className={s.classes.productLink} href={`/products#${product.slug}`}>Explore product <ArrowUpRight className={c.classes.icon} /></a>
        )}
      </div>
    </Card>
  );
}
