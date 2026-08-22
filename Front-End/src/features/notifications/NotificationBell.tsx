import { useState } from "react";
import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Descriptions, Dropdown, Empty, List, Modal, Spin, Tag } from "antd";
import { formatDateTime } from "../../lib/format/date";
import { resolveImageUrl } from "../../lib/config/env";
import { useActiveNotifications, getNotificationDetail } from "./api";
import { useQuery } from "@tanstack/react-query";
import type { AppNotification } from "../../lib/api/types";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const { data, isLoading } = useActiveNotifications({ page: 1, size: 10 });
  const items = data?.content ?? [];

  const { data: detail, isLoading: detailLoading } = useQuery({
    queryKey: ["notifications", "detail", selectedId ?? ""],
    queryFn: () => getNotificationDetail(selectedId as number),
    enabled: selectedId !== null,
  });

  const dropdownContent = (
    <div
      style={{
        minWidth: 340,
        maxWidth: 380,
        maxHeight: 460,
        overflowY: "auto",
        padding: 12,
        background: "var(--color-surface)",
        borderRadius: "var(--radius-md)",
        boxShadow: "var(--shadow-lg)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: "var(--color-text-primary)" }}>
        Thông báo mới
      </div>
      {isLoading ? (
        <Spin />
      ) : items.length === 0 ? (
        <Empty description="Không có thông báo nào" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <List<AppNotification>
          itemLayout="horizontal"
          dataSource={items}
          renderItem={(item) => (
            <List.Item
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedId(item.id)}
            >
              <List.Item.Meta
                avatar={
                  <Avatar shape="square" size={44} icon={<BellOutlined />} src={resolveImageUrl(item.anh)} />
                }
                title={item.tieuDe}
                description={
                  <span style={{ color: "var(--color-text-muted)", fontSize: 12 }}>
                    {formatDateTime(item.ngayTao)}
                  </span>
                }
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );

  return (
    <>
      <Dropdown
        dropdownRender={() => dropdownContent}
        trigger={["click"]}
        open={open}
        onOpenChange={setOpen}
        placement="bottomRight"
      >
        <Badge count={items.length} size="small" overflowCount={9}>
          <BellOutlined style={{ fontSize: 20, color: "inherit", cursor: "pointer" }} />
        </Badge>
      </Dropdown>

      <Modal
        open={selectedId !== null}
        title="Chi tiết thông báo"
        onCancel={() => setSelectedId(null)}
        footer={null}
        width={560}
        destroyOnClose
      >
        {detailLoading ? (
          <Spin />
        ) : (
          detail && (
            <Descriptions column={1} bordered size="small">
              <Descriptions.Item label="Tiêu đề">{detail.tieuDe}</Descriptions.Item>
              <Descriptions.Item label="Nội dung">
                <div dangerouslySetInnerHTML={{ __html: detail.noiDung }} />
              </Descriptions.Item>
              <Descriptions.Item label="Ngày tạo">
                {formatDateTime(detail.ngayTao)}
              </Descriptions.Item>
              <Descriptions.Item label="Trạng thái">
                <Tag color={detail.trangThai === 1 ? "success" : "default"}>
                  {detail.trangThai === 1 ? "Đang hoạt động" : "Ngừng"}
                </Tag>
              </Descriptions.Item>
            </Descriptions>
          )
        )}
      </Modal>
    </>
  );
}
