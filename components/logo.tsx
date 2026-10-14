import Link from "next/link";
import { navigationStyles as s } from "@/utilities/styles/navigation.style";

export function Logo() {
  return (
    <Link className={s.classes.logo} href="/" aria-label="NexSal home" transitionTypes={["nav-back"]}>
      <span className={s.classes.logoMark} aria-hidden="true">N</span>
      <span>NexSal</span>
    </Link>
  );
}
