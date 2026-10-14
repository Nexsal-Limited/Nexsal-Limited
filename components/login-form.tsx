"use client";

import { useActionState } from "react";
import { login, type LoginState } from "@/app/actions/auth";
import { Button } from "@/components/button";
import { ArrowUpRight } from "@/components/icons";
import { adminStyles as a } from "@/utilities/styles/admin.style";
import { componentStyles as c } from "@/utilities/styles/components.style";
import { pageStyles as p } from "@/utilities/styles/pages.style";

const initialState: LoginState = { error: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(login, initialState);

  return (
    <form className={a.classes.accessForm} action={action}>
      <div className={p.classes.field}><label htmlFor="admin-email">Email address</label><input id="admin-email" name="email" type="email" autoComplete="username" required /></div>
      <div className={p.classes.field}><label htmlFor="admin-password">Password</label><input id="admin-password" name="password" type="password" autoComplete="current-password" required /></div>
      {state.error ? <p className={a.classes.statusError} role="alert">{state.error}</p> : null}
      <Button type="submit" variant="accent" disabled={pending}>{pending ? "Verifying..." : "Continue securely"} <ArrowUpRight className={c.classes.icon} /></Button>
    </form>
  );
}
