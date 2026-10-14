import Link from "next/link";
import { navigationStyles as s } from "@/utilities/styles/navigation.style";
import Image from "next/image";

export function Logo() {
  return (
    <Link className={s.classes.logo} href="/" aria-label="NexSal home" transitionTypes={["nav-back"]}>
      <Image src={"/nexsal-logo.png"} alt="nexsal-logo" width={30} height={30} style={{background: 'white', borderRadius: '1rem'}}/>
      <span>Nexsal</span>
    </Link>
  );
}
