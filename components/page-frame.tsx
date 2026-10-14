"use client";

import { useEffect, useRef, ViewTransition, type ReactNode } from "react";
import { pageStyles as s } from "@/utilities/styles/pages.style";

export function PageFrame({ children }: { children: ReactNode }) {
  const frame = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (frame.current) frame.current.dataset.mounted = "true";
    });
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <ViewTransition enter="page-enter" exit="page-exit">
      <div ref={frame} className={s.classes.page}>{children}</div>
    </ViewTransition>
  );
}
