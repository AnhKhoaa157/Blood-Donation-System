import { useState } from "react";
import { Button, DatePicker, Descriptions, Form, Image, Input, Modal, Table, Tag, Upload } from "antd";
import type { UploadFile } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import { useCreateNotification, useDeleteNotification, useNotifications, useUpdateNotification } from "./api";
import { getNotificationDetail } from "./api";
import { useQuery } from "@tanstack/react-query";
import { resolveImageUrl } from "../../lib/config/env";
import { dayjs, formatDate, formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import ConfirmButton from "../../components/ConfirmButton";
import RichTextEditor from "../../components/RichTextEditor";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { AppNotification } from "../../lib/api/types";

const { RangePicker } = DatePicker;

interface NotificationFormValues {
  tieuDe: string;
  dateRange: [Dayjs, Dayjs];
  anh: UploadFile[];
}

export default function NotificationManagerPage() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [detailId, setDetailId] = useState<number | null>(null);
  const [editing, setEditing] = useState<AppNotification | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [content, setContent] = useState("");
  const [form] = Form.useForm<NotificationFormValues>();
  const { message } = useFeedback();

  const { data, isLoading } = useNotifications({ page, keyword: keyword || undefined });
  const { data: detail, isLoading: detailLoading } = useQuery({
    queryKey: ["notifications", "detail", detailId ?? ""],
    queryFn: () => getNotificationDetail(detailId as number),
    enabled: detailId !== null,
  });
  const createMutation = useCreateNotification();
  const updateMutation = useUpdateNotification(editing?.id ?? "");
  const deleteMutation = useDeleteNotification();

  const openCreate = () => {
    setEditing(null);
    setContent("");
    form.resetFields();
    setEditOpen(true);
  };

  const openEdit = (record: AppNotification) => {
    setEditing(record);
    setContent(record.noiDung);
    form.setFieldsValue({
      tieuDe: record.tieuDe,
      dateRange:
        record.ngayBatDau && record.ngayKetThuc
          ? [dayjs(record.ngayBatDau), dayjs(record.ngayKetThuc)]
          : undefined,
    });
    setEditOpen(true);
  };

  const handleSubmit = async (values: NotificationFormValues) => {
    const formData = new FormData();
    formData.append("tieude", values.tieuDe);
    formData.append("noidung", content);
    if (values.dateRange?.[0]) formData.append("ngayBatDau", values.dateRange[0].format("YYYY-MM-DD"));
    if (values.dateRange?.[1]) formData.append("ngayKetThuc", values.dateRange[1].format("YYYY-MM-DD"));
    const file = values.anh?.[0]?.originFileObj;
    if (file) formData.append("anh", file);

    try {
      if (editing) {
        await updateMutation.mutateAsync(formData);
        message.success("Cập nhật thành công!");
      } else {
        await createMutation.mutateAsync(formData);
        message.success("Tạo mới thành công!");
      }
      setEditOpen(false);
    } catch (error) {
      message.error((error as Error).message || "Lưu thất bại!");
    }
  };

  return (
    <div>
      <PageHeader
        title="Quản lý thông báo"
        extra={
          <div style={{ display: "flex", gap: 12 }}>
            <Input.Search placeholder="Tìm tiêu đề..." onSearch={(v) => { setKeyword(v); setPage(1); }} style={{ width: 240 }} />
            <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>Thêm thông báo</Button>
          </div>
        }
      />

      <Table<AppNotification>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        scroll={{ x: true }}
        columns={[
          { title: "Ảnh", dataIndex: "anh", width: 90, render: (v) => (v ? <Image src={resolveImageUrl(v)} width={60} preview={false} style={{ borderRadius: 6 }} /> : <Tag>Không có</Tag>) },
          { title: "Tiêu đề", dataIndex: "tieuDe" },
          { title: "Thời gian áp dụng", render: (_, r) => `${formatDate(r.ngayBatDau)} → ${formatDate(r.ngayKetThuc)}` },
          { title: "Ngày tạo", dataIndex: "ngayTao", render: (v) => formatDate(v) },
          { title: "Trạng thái", dataIndex: "trangThai", render: (v) => <Tag color={v === 1 ? "success" : "default"}>{v === 1 ? "Đang hoạt động" : "Ngừng"}</Tag> },
          {
            title: "Thao tác",
            render: (_, record) => (
              <div style={{ display: "flex", gap: 8 }}>
                <Button icon={<EyeOutlined />} size="small" onClick={() => setDetailId(record.id)} />
                <Button icon={<EditOutlined />} size="small" onClick={() => openEdit(record)} />
                <ConfirmButton size="small" danger confirmTitle="Xóa thông báo này?" onConfirm={() => deleteMutation.mutate(record.id)}>
                  <DeleteOutlined />
                </ConfirmButton>
              </div>
            ),
          },
        ]}
      />

      <Modal open={detailId !== null} title="Chi tiết thông báo" onCancel={() => setDetailId(null)} footer={null} width={640} destroyOnClose>
        {detailLoading ? null : detail && (
          <Descriptions column={1} bordered>
            <Descriptions.Item label="Tiêu đề">{detail.tieuDe}</Descriptions.Item>
            <Descriptions.Item label="Ảnh">{detail.anh ? <Image src={resolveImageUrl(detail.anh)} width={180} /> : "Không có"}</Descriptions.Item>
            <Descriptions.Item label="Nội dung"><div dangerouslySetInnerHTML={{ __html: detail.noiDung }} /></Descriptions.Item>
            <Descriptions.Item label="Thời gian áp dụng">{formatDate(detail.ngayBatDau)} → {formatDate(detail.ngayKetThuc)}</Descriptions.Item>
            <Descriptions.Item label="Ngày tạo">{formatDateTime(detail.ngayTao)}</Descriptions.Item>
          </Descriptions>
        )}
      </Modal>

      <Modal
        open={editOpen}
        title={editing ? "Cập nhật thông báo" : "Thêm thông báo mới"}
        onCancel={() => setEditOpen(false)}
        footer={null}
        width={640}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="tieuDe" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nội dung" required>
            <RichTextEditor value={content} onChange={setContent} height={240} />
          </Form.Item>
          <Form.Item name="dateRange" label="Thời gian áp dụng" rules={[{ required: true, message: "Chọn thời gian áp dụng" }]}>
            <RangePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="anh"
            label="Ảnh"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
          >
            <Upload beforeUpload={() => false} maxCount={1} listType="picture" accept="image/*">
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending || updateMutation.isPending}>
            {editing ? "Cập nhật" : "Tạo mới"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
