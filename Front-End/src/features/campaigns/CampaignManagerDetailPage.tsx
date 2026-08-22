import { useState } from "react";
import { Button, Col, DatePicker, Descriptions, Form, Input, InputNumber, Row, Table, Tag } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import type { Dayjs } from "dayjs";
import { useCampaignDetail, useUpdateCampaign } from "./api";
import { campaignStatusMap, donationComponentMap, donationRequestStatusMap } from "../../lib/status/maps";
import { dayjs, formatDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { CampaignStatus, DonationRequest } from "../../lib/api/types";

interface EditFormValues {
  ten: string;
  diaDiem: string;
  moTa?: string;
  ngayBatDau: Dayjs;
  ngayKetThuc: Dayjs;
  soLuongNguoiToiDa: number;
}

export default function CampaignManagerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: campaign, isLoading, isError, refetch } = useCampaignDetail(id);
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm<EditFormValues>();
  const updateMutation = useUpdateCampaign(id as string);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !campaign) return <ErrorState onRetry={refetch} />;

  const statusMeta = campaignStatusMap[campaign.trangThaiHoatDong];

  const startEdit = () => {
    form.setFieldsValue({
      ten: campaign.ten,
      diaDiem: campaign.diaDiem,
      moTa: campaign.moTa,
      ngayBatDau: dayjs(campaign.ngayBatDau),
      ngayKetThuc: dayjs(campaign.ngayKetThuc),
      soLuongNguoiToiDa: campaign.soLuongNguoiToiDa,
    });
    setEditMode(true);
  };

  const handleSave = async (values: EditFormValues) => {
    try {
      await updateMutation.mutateAsync({
        ten: values.ten,
        diaDiem: values.diaDiem,
        moTa: values.moTa,
        ngayBatDau: values.ngayBatDau.format("YYYY-MM-DD"),
        ngayKetThuc: values.ngayKetThuc.format("YYYY-MM-DD"),
        trangthai: campaign.trangThaiHoatDong,
      });
      message.success("Cập nhật thành công");
      setEditMode(false);
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const changeStatus = async (next: CampaignStatus) => {
    try {
      await updateMutation.mutateAsync({
        ten: campaign.ten,
        diaDiem: campaign.diaDiem,
        moTa: campaign.moTa,
        ngayBatDau: campaign.ngayBatDau,
        ngayKetThuc: campaign.ngayKetThuc,
        soLuongNguoiToiDa: campaign.soLuongNguoiToiDa,
        trangthai: next,
      });
      message.success(`Đã cập nhật trạng thái: ${campaignStatusMap[next].label}`);
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  return (
    <div>
      <PageHeader
        title={`Chiến dịch: ${campaign.ten}`}
        extra={
          <div style={{ display: "flex", gap: 8 }}>
            <Button onClick={() => navigate(-1)}>Quay lại</Button>
            {!editMode && <Button type="primary" onClick={startEdit}>Chỉnh sửa</Button>}
          </div>
        }
      />

      {!editMode ? (
        <>
          <Descriptions bordered column={2} size="middle">
            <Descriptions.Item label="Địa điểm">{campaign.diaDiem}</Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
                {campaign.trangThaiHoatDong !== "daketthuc" && (
                  <div style={{ display: "flex", gap: 8 }}>
                    {campaign.trangThaiHoatDong === "sapdienra" && (
                      <Button size="small" onClick={() => changeStatus("dangdienra")}>Đánh dấu đang diễn ra</Button>
                    )}
                    <Button size="small" onClick={() => changeStatus("daketthuc")}>Đánh dấu đã kết thúc</Button>
                  </div>
                )}
              </div>
            </Descriptions.Item>
            <Descriptions.Item label="Thời gian" span={2}>
              <Tag color="blue">{formatDate(campaign.ngayBatDau)}</Tag> → <Tag color="volcano">{formatDate(campaign.ngayKetThuc)}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Số người tối đa">{campaign.soLuongNguoiToiDa}</Descriptions.Item>
            <Descriptions.Item label="Đã đăng ký">{campaign.soLuongNguoiDangKyHienTai ?? 0}</Descriptions.Item>
            <Descriptions.Item label="Mô tả" span={2}>{campaign.moTa || "Chưa có mô tả"}</Descriptions.Item>
            {campaign.nguoiTao && (
              <Descriptions.Item label="Người tạo" span={2}>
                {campaign.nguoiTao.ten} — {campaign.nguoiTao.email}
              </Descriptions.Item>
            )}
          </Descriptions>

          <div style={{ marginTop: 28 }}>
            <h3>Danh sách yêu cầu hiến máu</h3>
            <Table<DonationRequest>
              rowKey="id"
              dataSource={campaign.danhSachYeuCauHieuMau ?? []}
              pagination={false}
              size="small"
              locale={{ emptyText: "Chưa có yêu cầu hiến máu nào" }}
              scroll={{ x: true }}
              columns={[
                { title: "Ngày hiến dự kiến", dataIndex: "ngayHienMauDuKien", render: (v) => formatDate(v) },
                { title: "Loại hiến", dataIndex: "loaiHien", render: (v) => <Tag color="blue">{donationComponentMap[v as keyof typeof donationComponentMap].label}</Tag> },
                { title: "Số lượng (ml)", dataIndex: "soLuong" },
                {
                  title: "Trạng thái",
                  dataIndex: "trangThai",
                  render: (v) => {
                    const meta = donationRequestStatusMap[v as keyof typeof donationRequestStatusMap];
                    return <StatusTag label={meta.label} tone={meta.tone} />;
                  },
                },
                { title: "Người hiến", dataIndex: "nguoiHien", render: (v) => v?.ten },
                { title: "Người duyệt", dataIndex: "nguoiDuyet", render: (v) => v?.ten ?? "Chưa duyệt" },
              ]}
            />
          </div>
        </>
      ) : (
        <Form form={form} layout="vertical" onFinish={handleSave}>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="ten" label="Tên chiến dịch" rules={[{ required: true, message: "Vui lòng nhập tên chiến dịch" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="diaDiem" label="Địa điểm" rules={[{ required: true, message: "Vui lòng nhập địa điểm" }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="moTa" label="Mô tả">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Row gutter={16}>
            <Col xs={24} sm={12}>
              <Form.Item name="ngayBatDau" label="Ngày bắt đầu" rules={[{ required: true, message: "Vui lòng chọn ngày bắt đầu" }]}>
                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item name="ngayKetThuc" label="Ngày kết thúc" rules={[{ required: true, message: "Vui lòng chọn ngày kết thúc" }]}>
                <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="soLuongNguoiToiDa"
            label="Số lượng người tối đa"
            rules={[
              { required: true, message: "Vui lòng nhập số lượng người tối đa" },
              {
                validator: (_, value) =>
                  !value || value >= campaign.soLuongNguoiDangKyHienTai
                    ? Promise.resolve()
                    : Promise.reject(new Error(`Phải lớn hơn hoặc bằng ${campaign.soLuongNguoiDangKyHienTai} (số người đã đăng ký).`)),
              },
            ]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 12 }} loading={updateMutation.isPending}>Lưu thay đổi</Button>
          <Button onClick={() => setEditMode(false)}>Hủy</Button>
        </Form>
      )}
    </div>
  );
}
