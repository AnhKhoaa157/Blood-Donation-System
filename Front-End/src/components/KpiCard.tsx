import type { ReactNode } from "react";
import { Card } from "antd";

interface KpiCardProps {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  tone?: "primary" | "accent" | "success" | "warning" | "info" | "neutral";
}

const TONE_KEY: Record<NonNullable<KpiCardProps["tone"]>, string> = {
  primary: "primary",
  accent: "accent",
  success: "success",
  warning: "warning",
  info: "info",
  neutral: "neutral",
};

export default function KpiCard({ label, value, icon, tone = "primary" }: KpiCardProps) {
  const key = TONE_KEY[tone];
  return (
    <Card
      variant="borderless"
      styles={{ body: { padding: 20 } }}
      style={{
        borderRadius: "var(--radius-lg, 16px)",
        boxShadow: "var(--shadow-sm)",
        background: "var(--color-surface)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        {icon && (
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-md, 10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              color: `var(--color-${key})`,
              background: `var(--color-${key}-bg)`,
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
        )}
        <div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "var(--color-text-primary)" }}>
            {value}
          </div>
          <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{label}</div>
        </div>
      </div>
    </Card>
  );
}
