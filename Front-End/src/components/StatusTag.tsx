import type { CSSProperties } from "react";
import type { StatusTone } from "../lib/status/types";

const TONE_VAR: Record<StatusTone, string> = {
  primary: "primary",
  accent: "accent",
  success: "success",
  warning: "warning",
  error: "error",
  info: "info",
  neutral: "neutral",
};

interface StatusTagProps {
  label: string;
  tone: StatusTone;
  className?: string;
}

/** Centralized status badge — every status/color pairing in the app should
 * flow through the maps in src/lib/status and render via this component so
 * the same status always looks the same everywhere. */
export default function StatusTag({ label, tone, className }: StatusTagProps) {
  const key = TONE_VAR[tone];
  const style: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "2px 10px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "20px",
    color: `var(--color-${key})`,
    background: `var(--color-${key}-bg)`,
    border: `1px solid var(--color-${key}-border)`,
    whiteSpace: "nowrap",
  };
  return (
    <span style={style} className={className}>
      {label}
    </span>
  );
}
