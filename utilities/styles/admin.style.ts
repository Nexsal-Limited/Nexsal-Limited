import { Estyle } from "elk-style-rule";

export const adminStyles = new Estyle()
  .defineRules({
    accessPage: { minHeight: "calc(100svh - 180px)", display: "grid", placeItems: "center", padding: "64px 0 100px" },
    accessCard: { width: "min(100%, 480px)", padding: 36, border: "1px solid var(--line)", borderRadius: 28, backgroundColor: "var(--surface)", boxShadow: "0 24px 70px var(--shadow)" },
    accessHeader: { marginBottom: 30, "& h1": { margin: "18px 0 10px", fontSize: 42, letterSpacing: "-.055em" }, "& p": { color: "var(--muted)", fontSize: 14, lineHeight: 1.65 } },
    accessForm: { display: "grid", gap: 18 },
    statusError: { padding: 13, border: "1px solid color-mix(in srgb, #d54b45 40%, var(--line))", borderRadius: 12, backgroundColor: "color-mix(in srgb, #d54b45 8%, var(--surface))", color: "#b83934", fontSize: 12, lineHeight: 1.5 },
    inboxPage: { padding: "72px 0 110px" },
    inboxHeader: { display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 28, marginBottom: 40, "& h1": { margin: "12px 0 0", fontSize: "clamp(2.8rem, 6vw, 5.5rem)", letterSpacing: "-.065em" } },
    inboxMeta: { display: "flex", alignItems: "center", gap: 10, color: "var(--muted)", fontSize: 12, fontWeight: 700 },
    inboxList: { display: "grid", gap: 14 },
    messageCard: { display: "grid", gridTemplateColumns: "minmax(180px, .4fr) minmax(0, 1fr)", gap: 34, padding: 28, border: "1px solid var(--line)", borderRadius: 22, backgroundColor: "var(--surface)", boxShadow: "0 10px 34px color-mix(in srgb, var(--shadow) 45%, transparent)" },
    sender: { "& h2": { margin: "12px 0 5px", fontSize: 20, letterSpacing: "-.035em" }, "& a": { color: "var(--muted)", fontSize: 12, overflowWrap: "anywhere" }, "& p": { marginTop: 13, color: "var(--muted)", fontSize: 12 } },
    messageBody: { "& p": { color: "var(--ink)", fontSize: 14, lineHeight: 1.75, whiteSpace: "pre-wrap" }, "& time": { display: "block", marginTop: 20, color: "var(--muted)", fontSize: 11 } },
    emptyInbox: { padding: "70px 30px", border: "1px dashed var(--line)", borderRadius: 24, textAlign: "center", color: "var(--muted)", "& h2": { marginBottom: 9, color: "var(--ink)", fontSize: 25 } },
    loading: { minHeight: "60svh", display: "grid", placeItems: "center", color: "var(--muted)", fontSize: 13 },
    honeypot: { position: "absolute", width: 1, height: 1, margin: -1, padding: 0, border: 0, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" },
  })
  .defineMedia({
    "(max-width: 700px)": {
      accessCard: { padding: 25 },
      inboxHeader: { alignItems: "flex-start", flexDirection: "column" },
      messageCard: { gridTemplateColumns: "1fr", gap: 24 },
    },
  })
  .mount("nexsal-admin");
