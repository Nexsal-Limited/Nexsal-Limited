"use client";

import type { PointerEvent, ReactNode } from "react";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export function InteractiveHero({ children }: { children: ReactNode }) {
  const move = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    const horizontal = (x - 0.5) * 15;
    const vertical = (y - 0.5) * 12;

    event.currentTarget.style.setProperty("--pointer-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 100}%`);
    event.currentTarget.style.setProperty("--shift-x", `${horizontal}px`);
    event.currentTarget.style.setProperty("--shift-y", `${vertical}px`);
    event.currentTarget.style.setProperty("--orbit-x", `${horizontal * -1.35}px`);
    event.currentTarget.style.setProperty("--orbit-y", `${vertical * -1.35}px`);
    event.currentTarget.style.setProperty("--tilt-x", `${horizontal * 0.16}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${vertical * -0.16}deg`);
  };

  const reset = (event: PointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--pointer-x", "50%");
    event.currentTarget.style.setProperty("--pointer-y", "38%");
    event.currentTarget.style.setProperty("--shift-x", "0px");
    event.currentTarget.style.setProperty("--shift-y", "0px");
    event.currentTarget.style.setProperty("--orbit-x", "0px");
    event.currentTarget.style.setProperty("--orbit-y", "0px");
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <section className={s.classes.hero} aria-labelledby="home-title" onPointerMove={move} onPointerLeave={reset}>
      <div className={s.classes.heroAtmosphere} aria-hidden="true">
        <div className={s.classes.heroSpotlight} />
        <div className={s.classes.heroGridPlane} />
        <div className={s.classes.heroOrbit} />
        <div className={s.classes.heroBeam} />
        <div className={s.classes.signalField}><span className={s.classes.signalNode} /><span className={s.classes.signalNode} /><span className={s.classes.signalNode} /><span className={s.classes.signalNode} /></div>
        <div className={s.classes.cursorCore} />
      </div>
      {children}
    </section>
  );
}
