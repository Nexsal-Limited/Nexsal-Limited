import { MessageCircle } from "@/components/icons";
import { componentStyles as s } from "@/utilities/styles/components.style";

export function WhatsAppButton() {
  return (
    <a
      className={s.classes.whatsapp}
      href="https://wa.me/23276413626?text=Hello%20NexSal%2C%20I%27d%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noreferrer"
      aria-label="Message NexSal on WhatsApp"
    >
      <MessageCircle className={s.classes.icon} /><span>WhatsApp us</span>
    </a>
  );
}
