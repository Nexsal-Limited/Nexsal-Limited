import { adminStyles } from "@/utilities/styles/admin.style";
import { componentStyles } from "@/utilities/styles/components.style";
import { navigationStyles } from "@/utilities/styles/navigation.style";
import { pageStyles } from "@/utilities/styles/pages.style";
import { renderEStyleSheets } from "@/utilities/server/estyle";
import { globalStyles } from "@/utilities/styles/theme.style";

export function CriticalStyles() {
  const css = renderEStyleSheets([
    componentStyles,
    globalStyles,
    navigationStyles,
    pageStyles,
    adminStyles,
  ]);

  return <style id="nexsal-critical-styles" data-estyle-critical="true">{css}</style>;
}
