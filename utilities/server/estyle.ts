import "server-only";

type RuntimeSheet = object;

export function renderEStyleSheets(sheets: RuntimeSheet[]) {
  return sheets.map((sheet) => {
    const renderer = Reflect.get(sheet, "renderSheet");
    if (typeof renderer !== "function") {
      throw new Error("The installed elk-style-rule version does not expose its stylesheet renderer.");
    }
    return Reflect.apply(renderer, sheet, []) as string;
  }).join("");
}
