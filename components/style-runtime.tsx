"use client";

import { useEffect } from "react";
import { componentStyles } from "@/utilities/styles/components.style";
import { globalStyles } from "@/utilities/styles/theme.style";
import { navigationStyles } from "@/utilities/styles/navigation.style";
import { pageStyles } from "@/utilities/styles/pages.style";
import { adminStyles } from "@/utilities/styles/admin.style";

export function StyleRuntime() {
  useEffect(() => {
    globalStyles.mount("nexsal-global");
    componentStyles.mount("nexsal-components");
    navigationStyles.mount("nexsal-navigation");
    pageStyles.mount("nexsal-pages");
    adminStyles.mount("nexsal-admin");
  }, []);

  return null;
}
