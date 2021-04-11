export interface FileResult {
  rule: string,
  line: number,
  file: string,
  level: "warn" | "error" | "off"
}

export type Runtime = "lua" | "js" | "c#" | "none"