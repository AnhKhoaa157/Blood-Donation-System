import { Spin } from "antd";

/** Full-viewport loading state shown while a lazy-loaded route chunk downloads. */
export default function RouteFallback() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Spin size="large" />
    </div>
  );
}
