import type { ElementType, ReactNode } from "react";
import { componentStyles as s } from "@/utilities/styles/components.style";

type CardProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
};

export function Card({ as: Tag = "article", children, className }: CardProps) {
  return <Tag className={[s.classes.card, className].filter(Boolean).join(" ")}>{children}</Tag>;
}
