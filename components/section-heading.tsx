import { componentStyles as s } from "@/utilities/styles/components.style";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
};

export function SectionHeading({ eyebrow, title, copy, centered = false }: SectionHeadingProps) {
  return (
    <header className={centered ? s.classes.centeredHeading : undefined}>
      <p className={s.classes.eyebrow}>{eyebrow}</p>
      <h2 className={s.classes.sectionHeading}>{title}</h2>
      {copy ? <p className={s.classes.sectionIntro}>{copy}</p> : null}
    </header>
  );
}
