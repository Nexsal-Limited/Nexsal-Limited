import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CriticalStyles } from "@/components/critical-styles";
import { StyleRuntime } from "@/components/style-runtime";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { globalStyles as s } from "@/utilities/styles/theme.style";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexsal.com"),
  title: { default: "NexSal | Connected systems for modern business", template: "%s | NexSal" },
  description: "NexSal designs connected products for operations, integrations, and governance so ambitious teams can move with clarity.",
  keywords: ["business software", "workflow automation", "systems integration", "operations platform", "NexSal"],
  openGraph: {
    title: "NexSal | Connected systems for modern business",
    description: "Digital systems that connect your work, people, and data.",
    type: "website",
    url: "/",
    siteName: "NexSal",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <head><CriticalStyles /></head>
      <body className={s.classes.body}>
        <StyleRuntime />
        <a className={s.classes.skipLink} href="#main-content">Skip to content</a>
        <div className={s.classes.appShell}>
          <Header />
          <main id="main-content" className={s.classes.main}>{children}</main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
