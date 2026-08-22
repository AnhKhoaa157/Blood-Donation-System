import { Empty } from "antd";
import type { ReactNode } from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({
  title = "Chưa có dữ liệu",
  description,
  action,
}: EmptyStateProps) {
  return (
    <div style={{ padding: "48px 16px", textAlign: "center" }}>
      <Empty
        description={
          <span>
            <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>
              {title}
            </div>
            {description && (
              <div style={{ color: "var(--color-text-muted)", marginTop: 4 }}>
                {description}
              </div>
            )}
          </span>
        }
      />
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </div>
  );
}
