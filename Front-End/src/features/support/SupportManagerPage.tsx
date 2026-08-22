import { useState } from "react";
import { Button, Descriptions, Form, Input, Modal, Select, Table, Timeline } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { useSupportTicketDetail, useSupportTickets, useUpdateSupportTicketStatus } from "./api";
import { supportTicketStatusMap } from "../../lib/status/maps";
import { formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { SupportTicket, SupportTicketStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: SupportTicketStatus; label: string }[] = [
  { value: "moi", label: "Mới" },
  { value: "dangxuly", label: "Đang xử lý" },
  { value: "hoanthanh", label: "Hoàn thành" },
  { value: "dahuy", label: "Đã hủy" },
];

export default function SupportManagerPage() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [detailId, setDetailId] = useState<number | null>(null);
  const [editing, setEditing] = useState<SupportTicket | null>(null);
  const [form] = Form.useForm<{ trangThai: SupportTicketStatus; ghiChu?: string }>();
  const { message } = useFeedback();

  const { data, isLoading } = useSupportTickets({ page, keyword: keyword || undefined });
  const { data: detail } = useSupportTicketDetail(detailId ?? undefined);
  const updateMutation = useUpdateSupportTicketStatus();

  return (
    <div>
      <PageHeader
        title="Quản lý yêu cầu hỗ trợ"
        extra={<Input.Search placeholder="Tìm theo tên, email, SĐT, tiêu đề..." onSearch={(v) => { setKeyword(v); setPage(1); }} style={{ width: 320 }} />}
      />

      <Table<SupportTicket>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        columns={[
          { title: "#", dataIndex: "id", width: 60 },
          { title: "Họ tên", dataIndex: "hoTen" },
          { title: "Email", dataIndex: "email" },
          { title: "SĐT", dataIndex: "soDienThoai" },
          { title: "Tiêu đề", dataIndex: "tieuDe", ellipsis: true },
          {
            title: "Trạng thái",
            dataIndex: "trangThai",
            render: (v) => {
              const meta = supportTicketStatusMap[v as SupportTicketStatus];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
          {
            title: "Thao tác",
            render: (_, record) => (
              <div style={{ display: "flex", gap: 8 }}>
                <a onClick={() => setDetailId(record.id)}><EyeOutlined /></a>
                <a
                  onClick={() => {
                    setEditing(record);
                    form.setFieldsValue({ trangThai: record.trangThai, ghiChu: "" });
                  }}
                >
                  <EditOutlined />
                </a>
              </div>
            ),
          },
        ]}
      />

      <Modal open={detailId !== null} title="Chi tiết yêu cầu hỗ trợ" onCancel={() => setDetailId(null)} footer={null} width={760} destroyOnClose>
        {detail && (
          <>
            <Descriptions column={2} bordered>
              <Descriptions.Item label="Họ tên">{detail.hoTen}</Descriptions.Item>
              <Descriptions.Item label="Email">{detail.email}</Descriptions.Item>
              <Descriptions.Item label="Số điện thoại">{detail.soDienThoai}</Descriptions.Item>
              <Descriptions.Item label="Tiêu đề">{detail.tieuDe}</Descriptions.Item>
              <Descriptions.Item label="Nội dung" span={2}>{detail.noiDung}</Descriptions.Item>
              <Descriptions.Item label="Trạng thái">
                <StatusTag {...supportTicketStatusMap[detail.trangThai]} />
              </Descriptions.Item>
              <Descriptions.Item label="Ngày tạo">{formatDateTime(detail.ngayTao)}</Descriptions.Item>
            </Descriptions>

            {detail.histories && detail.histories.length > 0 && (
              <div style={{ marginTop: 24 }}>
                <h4>Lịch sử xử lý</h4>
                <Timeline
                  items={detail.histories.map((h) => ({
                    children: (
                      <div key={h.id}>
                        <div><StatusTag {...supportTicketStatusMap[h.trangThai]} /> — {formatDateTime(h.ngayTao)}</div>
                        <div>{h.supporter ? `Nhân viên: ${h.supporter.ten}` : "Người dùng tạo"}</div>
                        {h.ghiChu && <div>Ghi chú: {h.ghiChu}</div>}
                      </div>
                    ),
                  }))}
                />
              </div>
            )}
          </>
        )}
      </Modal>

      <Modal
        open={Boolean(editing)}
        title="Cập nhật trạng thái yêu cầu"
        onCancel={() => setEditing(null)}
        footer={null}
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            if (!editing) return;
            try {
              await updateMutation.mutateAsync({ id: editing.id, payload: { trangthai: values.trangThai, ghichu: values.ghiChu } });
              message.success("Cập nhật trạng thái thành công!");
              setEditing(null);
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="trangThai" label="Trạng thái" rules={[{ required: true, message: "Chọn trạng thái" }]}>
            <Select options={STATUS_OPTIONS} />
          </Form.Item>
          <Form.Item name="ghiChu" label="Ghi chú">
            <Input.TextArea rows={3} placeholder="Thêm ghi chú (nếu có)" />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <Button onClick={() => setEditing(null)}>Hủy</Button>
            <Button type="primary" htmlType="submit" loading={updateMutation.isPending}>Cập nhật</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
