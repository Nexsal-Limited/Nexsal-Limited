import { Estyle } from "elk-style-rule";

export const theme = new Estyle().setTheme({
  light: {
    background: "#f4f6ef",
    surface: "#ffffff",
    surfaceSoft: "#e9eee3",
    ink: "#13201b",
    muted: "#68746d",
    line: "#d7ddd2",
    accent: "#b7f22c",
    accentInk: "#13201b",
    darkPanel: "#12231d",
    darkPanelInk: "#f5f8f1",
    shadow: "rgba(21, 40, 32, 0.12)",
  },
  dark: {
    background: "#09110e",
    surface: "#101a16",
    surfaceSoft: "#17251f",
    ink: "#f2f6ef",
    muted: "#9aa9a1",
    line: "#2a3a33",
    accent: "#b7f22c",
    accentInk: "#13201b",
    darkPanel: "#dff6d4",
    darkPanelInk: "#13201b",
    shadow: "rgba(0, 0, 0, 0.34)",
  },
});

const light = theme.dynamicTheme("light");
const dark = theme.dynamicTheme("dark");

export const globalStyles = new Estyle()
  .defineRules({
    body: {
      "--background": light.background,
      "--surface": light.surface,
      "--surface-soft": light.surfaceSoft,
      "--ink": light.ink,
      "--muted": light.muted,
      "--line": light.line,
      "--accent": light.accent,
      "--accent-ink": light.accentInk,
      "--dark-panel": light.darkPanel,
      "--dark-panel-ink": light.darkPanelInk,
      "--shadow": light.shadow,
      margin: 0,
      minHeight: "100vh",
      backgroundColor: "var(--background)",
      color: "var(--ink)",
      fontFamily: "var(--font-manrope), ui-sans-serif, sans-serif",
      fontSynthesis: "none",
      textRendering: "optimizeLegibility",
      transition: "background-color 240ms ease, color 240ms ease",
      "&[data-theme=\"dark\"]": {
        "--background": dark.background,
        "--surface": dark.surface,
        "--surface-soft": dark.surfaceSoft,
        "--ink": dark.ink,
        "--muted": dark.muted,
        "--line": dark.line,
        "--accent": dark.accent,
        "--accent-ink": dark.accentInk,
        "--dark-panel": dark.darkPanel,
        "--dark-panel-ink": dark.darkPanelInk,
        "--shadow": dark.shadow,
        colorScheme: "dark",
      },
      "& *, & *::before, & *::after": { boxSizing: "border-box" },
      "& button, & input, & textarea, & select": { font: "inherit" },
      "& button, & a": { WebkitTapHighlightColor: "transparent" },
      "& :where(a:any-link)": { color: "inherit", textDecoration: "none" },
      "& img, & svg": { display: "block" },
      "& h1, & h2, & h3, & h4": { fontFamily: "var(--font-space-grotesk), var(--font-manrope), sans-serif" },
      "& h1, & h2, & h3, & h4, & p": { marginBlock: 0 },
      "& ul, & ol": { marginBlock: 0 },
      "& ::selection": { backgroundColor: "var(--accent)", color: "#13201b" },
    },
    appShell: { minHeight: "100vh", overflow: "hidden" },
    main: { minHeight: "65vh" },
    skipLink: {
      position: "fixed",
      top: 12,
      left: 12,
      zIndex: 999,
      padding: "10px 16px",
      borderRadius: 999,
      backgroundColor: "var(--accent)",
      color: "var(--accent-ink)",
      fontWeight: 700,
      transform: "translateY(-160%)",
      transition: "transform 160ms ease",
      "&:focus": { transform: "translateY(0)" },
    },
  })
  .defineMedia({
    "(prefers-reduced-motion: reduce)": {
      body: { scrollBehavior: "auto", "& *, & *::before, & *::after": { transitionDuration: "0.01ms" } },
    },
  })
  .mount("nexsal-global");
