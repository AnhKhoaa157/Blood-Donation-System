export type StatusTone =
  | "primary"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "neutral";

export interface StatusMeta {
  label: string;
  tone: StatusTone;
}

export type StatusMap<K extends string> = Record<K, StatusMeta>;

export function resolveStatus<K extends string>(
  map: StatusMap<K>,
  key: K | string | null | undefined,
  fallbackLabel = "Không xác định"
): StatusMeta {
  if (key && key in map) return map[key as K];
  return { label: fallbackLabel, tone: "neutral" };
}
