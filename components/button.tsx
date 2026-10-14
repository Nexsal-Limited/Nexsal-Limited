import Link from "next/link";
import type { ReactNode } from "react";
import { componentStyles as s } from "@/utilities/styles/components.style";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "accent" | "ghost";
  size?: "default" | "small";
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({ children, href, variant = "primary", size = "default", type = "button", onClick, className, disabled = false }: ButtonProps) {
  const classes = [
    s.classes.button,
    variant === "accent" ? s.classes.buttonAccent : variant === "ghost" ? s.classes.buttonGhost : s.classes.buttonPrimary,
    size === "small" ? s.classes.buttonSmall : "",
    className ?? "",
  ].filter(Boolean).join(" ");

  if (href) {
    return <Link className={classes} href={href} transitionTypes={["nav-forward"]}>{children}</Link>;
  }

  return <button className={classes} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}
