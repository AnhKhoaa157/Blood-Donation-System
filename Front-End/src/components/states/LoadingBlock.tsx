import { Spin } from "antd";

export default function LoadingBlock({ minHeight = 240 }: { minHeight?: number }) {
  return (
    <div
      style={{
        minHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
}
