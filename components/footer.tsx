import Link from "next/link";
import { Logo } from "@/components/logo";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { navigationStyles as s } from "@/utilities/styles/navigation.style";

export function Footer() {
  return (
    <footer className={s.classes.footer}>
      <div className={c.classes.container}>
        <div className={s.classes.footerGrid}>
          <div className={s.classes.footerBrand}>
            <Logo />
            <p className={s.classes.footerText}>Digital systems that connect the work, people, and data behind ambitious businesses.</p>
          </div>
          <nav aria-label="Product links">
            <h2 className={s.classes.footerTitle}>Products</h2>
            <div className={s.classes.footerLinks}>
              <Link href="/products#nexflow">NexFlow</Link><Link href="/products#nexconnect">NexConnect</Link><Link href="/products#nexguard">NexGuard</Link>
            </div>
          </nav>
          <nav aria-label="Company links">
            <h2 className={s.classes.footerTitle}>Company</h2>
            <div className={s.classes.footerLinks}>
              <Link href="/about">About us</Link><Link href="/contact">Contact</Link><Link href="/about#values">Our values</Link>
            </div>
          </nav>
          <div>
            <h2 className={s.classes.footerTitle}>Connect</h2>
            <address className={s.classes.footerLinks}>
              <a href="mailto:hello@nexsal.com">hello@nexsal.com</a><span>Mon-Fri, 9:00-17:00</span><span>Working globally</span>
            </address>
          </div>
        </div>
        <div className={s.classes.footerBottom}>
          <span>© 2026 NexSal. All rights reserved.</span>
          <span>Built for clarity. Designed for momentum.</span>
        </div>
      </div>
    </footer>
  );
}
