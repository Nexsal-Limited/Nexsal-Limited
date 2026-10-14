import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults = {
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ArrowUpRight(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M7 17 17 7M8 7h9v9" /></svg>;
}

export function ChevronDown(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m7 9 5 5 5-5" /></svg>;
}

export function Moon(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M20.5 15.5A8.4 8.4 0 0 1 8.5 3.7 8.5 8.5 0 1 0 20.5 15.5Z" /></svg>;
}

export function Sun(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}

export function Menu(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function Close(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>;
}

export function Layers(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></svg>;
}

export function Network(props: IconProps) {
  return <svg {...defaults} {...props}><circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" /><path d="m8.2 7.3 2.7 8.3M15.8 7.3l-2.7 8.3M8.5 6h7" /></svg>;
}

export function Shield(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M12 3 5 6v5c0 4.7 2.9 8.2 7 10 4.1-1.8 7-5.3 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>;
}

export function Spark(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" /><path d="m19 17 .6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" /></svg>;
}

export function Code(props: IconProps) {
  return <svg {...defaults} {...props}><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></svg>;
}

export function MessageCircle(props: IconProps) {
  return <svg {...defaults} {...props}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-3.8-.8L3 21l1.7-5a8.5 8.5 0 1 1 16.3-4.5Z" /><path d="M8.2 8.2c.7 3.2 2.4 4.9 5.6 5.6" /></svg>;
}
