import { useState } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Modal, Select, Table, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import { useCampaigns, useCreateCampaign } from "./api";
import { campaignStatusMap } from "../../lib/status/maps";
import { formatDate, toApiDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { Campaign, CampaignStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: CampaignStatus; label: string }[] = [
  { value: "sapdienra", label: "Sắp diễn ra" },
  { value: "dangdienra", label: "Đang diễn ra" },
  { value: "daketthuc", label: "Đã kết thúc" },
];

interface CampaignFormValues {
  ten: string;
  diaDiem: string;
  moTa?: string;
  ngayBatDau: Dayjs;
  ngayKetThuc: Dayjs;
  soLuongNguoiToiDa: number;
}

interface CampaignManagerPageProps {
  basePath: string;
}

export default function CampaignManagerPage({ basePath }: CampaignManagerPageProps) {
  const [status, setStatus] = useState<CampaignStatus>("sapdienra");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<CampaignFormValues>();
  const navigate = useNavigate();
  const { message } = useFeedback();

  const { data, isLoading } = useCampaigns(page, status);
  const createMutation = useCreateCampaign();

  return (
    <div>
      <PageHeader
        title="Quản lý chiến dịch"
        extra={
          <div style={{ display: "flex", gap: 12 }}>
            <Select
              value={status}
              onChange={(v) => { setStatus(v); setPage(1); }}
              options={STATUS_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
              style={{ width: 160 }}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Thêm chiến dịch</Button>
          </div>
        }
      />

      <Table<Campaign>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        scroll={{ x: true }}
        onRow={(record) => ({ onClick: () => navigate(`${basePath}/${record.id}`), style: { cursor: "pointer" } })}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Tên chiến dịch", dataIndex: "ten", render: (v) => <strong>{v}</strong> },
          {
            title: "Thời gian",
            render: (_, r) => (
              <span>
                <Tag color="blue">{formatDate(r.ngayBatDau)}</Tag>
                {" → "}
                <Tag color="volcano">{formatDate(r.ngayKetThuc)}</Tag>
              </span>
            ),
          },
          { title: "Địa điểm", dataIndex: "diaDiem" },
          { title: "Số người", render: (r) => `${r.soLuongNguoiDangKyHienTai}/${r.soLuongNguoiToiDa}` },
          {
            title: "Trạng thái",
            dataIndex: "trangThaiHoatDong",
            render: (v) => {
              const meta = campaignStatusMap[v as CampaignStatus];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
        ]}
      />

      <Modal title="Thêm chiến dịch hiến máu mới" open={open} onCancel={() => setOpen(false)} footer={null} destroyOnClose width={640}>
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            try {
              await createMutation.mutateAsync({
                ten: values.ten,
                diaDiem: values.diaDiem,
                moTa: values.moTa,
                ngayBatDau: toApiDate(values.ngayBatDau) as string,
                ngayKetThuc: toApiDate(values.ngayKetThuc) as string,
                soLuongNguoiToiDa: Number(values.soLuongNguoiToiDa),
              });
              message.success("Tạo chiến dịch thành công!");
              setOpen(false);
              form.resetFields();
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="ten" label="Tên chiến dịch" rules={[{ required: true, message: "Vui lòng nhập tên chiến dịch" }]}>
            <Input placeholder="Nhập tên chiến dịch" />
          </Form.Item>
          <Form.Item name="diaDiem" label="Địa điểm" rules={[{ required: true, message: "Vui lòng nhập địa điểm" }]}>
            <Input placeholder="Nhập địa điểm diễn ra" />
          </Form.Item>
          <Form.Item name="moTa" label="Mô tả">
            <Input.TextArea rows={3} placeholder="Thông tin mô tả chi tiết" />
          </Form.Item>
          <Form.Item name="ngayBatDau" label="Ngày bắt đầu" rules={[{ required: true, message: "Chọn ngày bắt đầu" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="ngayKetThuc" label="Ngày kết thúc" rules={[{ required: true, message: "Chọn ngày kết thúc" }]}>
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="soLuongNguoiToiDa" label="Số lượng người tối đa" rules={[{ required: true, message: "Nhập số lượng người tối đa" }]}>
            <InputNumber min={1} style={{ width: "100%" }} placeholder="VD: 100" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending}>Thêm chiến dịch</Button>
        </Form>
      </Modal>
    </div>
  );
}
