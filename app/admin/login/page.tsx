import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";
import { Logo } from "@/components/logo";
import { PageFrame } from "@/components/page-frame";
import { adminStyles as a } from "@/utilities/styles/admin.style";
import { componentStyles as c } from "@/utilities/styles/components.style";

export const metadata: Metadata = {
  title: "Secure access",
  robots: { index: false, follow: false, noarchive: true },
};

export default function AdminLoginPage() {
  return (
    <PageFrame>
      <section className={a.classes.accessPage} aria-labelledby="access-title">
        <div className={c.classes.container}>
          <div className={a.classes.accessCard}>
            <header className={a.classes.accessHeader}>
              <Logo />
              <h1 id="access-title">Secure access</h1>
              <p>This area is restricted to authorized NexSal team members.</p>
            </header>
            <LoginForm />
          </div>
        </div>
      </section>
    </PageFrame>
  );
}
