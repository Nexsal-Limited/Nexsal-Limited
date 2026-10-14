"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { ChevronDown, Close, Code, Layers, Menu, Network, Shield, Sun } from "@/components/icons";
import { Logo } from "@/components/logo";
import { products } from "@/utilities/content";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { navigationStyles as s } from "@/utilities/styles/navigation.style";

const productIcons = [Layers, Network, Shield];

export function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("nexsal-theme");
    const useDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.dataset.theme = useDark ? "dark" : "light";
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDropdownOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const toggleTheme = () => {
    const nextDark = document.body.dataset.theme !== "dark";
    document.body.dataset.theme = nextDark ? "dark" : "light";
    localStorage.setItem("nexsal-theme", nextDark ? "dark" : "light");
  };

  return (
    <header className={s.classes.header}>
      <div className={c.classes.container}>
        <nav className={s.classes.nav} aria-label="Primary navigation">
          <Logo />
          <div className={s.classes.navLinks}>
            <Link className={s.classes.navLink} data-active={pathname === "/"} href="/" transitionTypes={["nav-back"]}>Home</Link>
            <div className={s.classes.dropdownWrap} ref={dropdownRef}>
              <button
                className={s.classes.navLink}
                data-active={pathname.startsWith("/products")}
                type="button"
                aria-expanded={dropdownOpen}
                aria-controls="product-menu"
                onClick={() => setDropdownOpen((open) => !open)}
              >
                Products <ChevronDown className={[c.classes.icon, c.classes.arrow].join(" ")} data-open={dropdownOpen} />
              </button>
              <div id="product-menu" className={s.classes.dropdown} data-open={dropdownOpen}>
                {products.map((product, index) => {
                  const Icon = productIcons[index];
                  return (
                    <Link key={product.slug} className={s.classes.dropdownLink} href={`/products#${product.slug}`} onClick={() => setDropdownOpen(false)} transitionTypes={["nav-forward"]}>
                      <span className={s.classes.dropdownIcon}><Icon className={c.classes.icon} /></span>
                      <span><strong>{product.name}</strong><span>{product.description.slice(0, 64)}...</span></span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link className={s.classes.navLink} data-active={pathname === "/about"} href="/about" transitionTypes={["nav-forward"]}>About</Link>
            <Link className={s.classes.navLink} data-active={pathname === "/contact"} href="/contact" transitionTypes={["nav-forward"]}>Contact</Link>
          </div>
          <div className={s.classes.navActions}>
            <button className={s.classes.themeButton} type="button" aria-label="Toggle color theme" onClick={toggleTheme}>
              <Sun className={c.classes.icon} />
            </button>
            <Button className={s.classes.navCta} href="/contact" size="small" variant="accent">Start a project</Button>
            <button className={[s.classes.themeButton, s.classes.menuButton].join(" ")} type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <Close className={c.classes.icon} /> : <Menu className={c.classes.icon} />}
            </button>
          </div>
        </nav>
        <nav className={s.classes.mobileMenu} data-open={menuOpen} aria-label="Mobile navigation">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home <Code className={c.classes.icon} /></Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Products <Layers className={c.classes.icon} /></Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About <Network className={c.classes.icon} /></Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact <Shield className={c.classes.icon} /></Link>
          <Link data-cta href="/contact" transitionTypes={["nav-forward"]} onClick={() => setMenuOpen(false)}>Start a project</Link>
        </nav>
      </div>
    </header>
  );
}
