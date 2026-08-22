import { HeartFilled } from "@ant-design/icons";
import type { CSSProperties } from "react";

interface BrandMarkProps {
  size?: number;
  tone?: "light" | "dark";
}

/** Small circular heart mark used as the app's logo across every layout. */
export default function BrandMark({ size = 36, tone = "light" }: BrandMarkProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    background: tone === "light" ? "var(--color-primary)" : "rgba(255,255,255,0.12)",
    color: "#fff",
  };
  return (
    <span style={style}>
      <HeartFilled style={{ fontSize: size * 0.5 }} />
    </span>
  );
}
