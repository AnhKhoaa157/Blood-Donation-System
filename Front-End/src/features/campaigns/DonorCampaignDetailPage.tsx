import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import type { Dayjs } from "dayjs";
import { useCampaignDetail } from "./api";
import CampaignDetailView from "./CampaignDetailView";
import { useDonateBlood } from "../donation-requests/api";
import { dayjs, toApiDate } from "../../lib/format/date";
import { useFeedback } from "../../lib/feedback/useFeedback";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import type { DonationComponent } from "../../lib/api/types";

const RECOVERY_WEEKS: Record<DonationComponent, number> = {
  toanphan: 12,
  hongcau: 16,
  tieucau: 2,
  huyettuong: 2,
};

const COMPONENT_OPTIONS = [
  { value: "toanphan", label: "Toàn phần (nghỉ tối thiểu 12 tuần)" },
  { value: "hongcau", label: "Hồng cầu (nghỉ tối thiểu 16 tuần)" },
  { value: "tieucau", label: "Tiểu cầu (nghỉ tối thiểu 2 tuần)" },
  { value: "huyettuong", label: "Huyết tương (nghỉ tối thiểu 2 tuần)" },
];

interface DonationFormValues {
  ngayHienMauDuKien: Dayjs;
  ngayPhucHoiGanNhat: Dayjs;
  loaiHien: DonationComponent;
  soLuong: 250 | 350;
  sucKhoeHienTai?: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
  ghiChu?: string;
}

function validateRecoveryGap(a: Dayjs, b: Dayjs, component: DonationComponent | undefined) {
  if (!component) return true;
  const requiredDays = RECOVERY_WEEKS[component] * 7;
  return Math.abs(a.diff(b, "day")) >= requiredDays;
}

export default function DonorCampaignDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: campaign, isLoading, isError, refetch } = useCampaignDetail(id);
  const donateMutation = useDonateBlood();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<DonationFormValues>();

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !campaign) return <ErrorState onRetry={refetch} />;

  const now = dayjs();
  const isNotYet = now.isBefore(dayjs(campaign.ngayBatDau), "day");
  const isEnded = now.isAfter(dayjs(campaign.ngayKetThuc), "day");

  const handleSubmit = async (values: DonationFormValues) => {
    if (!validateRecoveryGap(values.ngayHienMauDuKien, values.ngayPhucHoiGanNhat, values.loaiHien)) {
      message.error(
        `Ngày hiến máu phải cách ngày phục hồi gần nhất ít nhất ${RECOVERY_WEEKS[values.loaiHien]} tuần cho loại hiến đã chọn.`
      );
      return;
    }
    try {
      await donateMutation.mutateAsync({
        hoatDongHienMau: campaign.id,
        ngayHienMauDuKien: toApiDate(values.ngayHienMauDuKien) as string,
        ngayPhucHoiGanNhat: toApiDate(values.ngayPhucHoiGanNhat) as string,
        ghiChu: values.ghiChu,
        loaiHien: values.loaiHien,
        soLuong: Number(values.soLuong),
        sucKhoeHienTai: values.sucKhoeHienTai,
        dangMangThai: values.dangMangThai,
        macBenhTruyenNhiem: values.macBenhTruyenNhiem,
      });
      message.success(`Đã gửi yêu cầu hiến máu cho chiến dịch "${campaign.ten}".`);
      setOpen(false);
      form.resetFields();
    } catch (error) {
      message.error((error as Error).message || "Không thể gửi yêu cầu. Vui lòng thử lại.");
    }
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto" }}>
      <Button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
        Quay lại
      </Button>

      <CampaignDetailView
        campaign={campaign}
        action={
          <Button
            type="primary"
            size="large"
            icon={<HeartOutlined />}
            disabled={isNotYet || isEnded}
            onClick={() => setOpen(true)}
          >
            Đăng ký hiến máu
          </Button>
        }
      />

      <Modal title="Đăng ký hiến máu" open={open} onCancel={() => setOpen(false)} footer={null} width={700} destroyOnClose>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Ngày hiến máu dự kiến" name="ngayHienMauDuKien" rules={[{ required: true, message: "Vui lòng chọn ngày hiến máu" }]}>
                <DatePicker style={{ width: "100%" }} disabledDate={(d) => d && d.isBefore(dayjs(), "day")} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ngày phục hồi gần nhất" name="ngayPhucHoiGanNhat" rules={[{ required: true, message: "Vui lòng chọn ngày phục hồi" }]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Loại hiến máu" name="loaiHien" rules={[{ required: true, message: "Vui lòng chọn loại hiến máu" }]}>
                <Select placeholder="Chọn loại hiến máu" options={COMPONENT_OPTIONS} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số lượng máu hiến" name="soLuong" rules={[{ required: true, message: "Vui lòng chọn số lượng" }]}>
                <Select options={[{ value: 350, label: "350 ml" }, { value: 250, label: "250 ml" }]} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Sức khỏe hiện tại" name="sucKhoeHienTai">
                <Input.TextArea placeholder="Mô tả tình trạng sức khỏe hiện tại..." rows={2} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Đang mang thai" name="dangMangThai" rules={[{ required: true, message: "Vui lòng chọn" }]}>
                <Select options={[{ value: 1, label: "Có" }, { value: 0, label: "Không" }]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Mắc bệnh truyền nhiễm" name="macBenhTruyenNhiem" rules={[{ required: true, message: "Vui lòng chọn" }]}>
                <Select options={[{ value: 1, label: "Có" }, { value: 0, label: "Không" }]} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Ghi chú" name="ghiChu">
                <Input.TextArea placeholder="Ghi chú thêm nếu có..." rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" block size="large" loading={donateMutation.isPending}>
            Gửi yêu cầu
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
