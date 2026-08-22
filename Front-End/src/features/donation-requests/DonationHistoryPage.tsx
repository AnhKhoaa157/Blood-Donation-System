import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Pagination, Row, Select } from "antd";
import type { Dayjs } from "dayjs";
import {
  useCancelDonationRequest,
  useMyDonationRequests,
  useUpdateDonationRequest,
} from "./api";
import { donationComponentMap, donationRequestStatusMap } from "../../lib/status/maps";
import { formatDate } from "../../lib/format/date";
import { dayjs, toApiDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import ConfirmButton from "../../components/ConfirmButton";
import LoadingBlock from "../../components/states/LoadingBlock";
import EmptyState from "../../components/states/EmptyState";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { DonationComponent, DonationRequest, DonationRequestStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: DonationRequestStatus | ""; label: string }[] = [
  { value: "", label: "Tất cả" },
  { value: "dangcho", label: "Đang chờ duyệt" },
  { value: "xacnhan", label: "Đã xác nhận" },
  { value: "dahien", label: "Đã hiến máu" },
  { value: "huy", label: "Đã hủy" },
  { value: "tuchoi", label: "Từ chối" },
];

interface EditFormValues {
  ngayHienMauDuKien: Dayjs;
  ngayPhucHoiGanNhat: Dayjs;
  loaiHien: DonationComponent;
  soLuong: number;
  sucKhoeHienTai?: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
  ghiChu?: string;
}

export default function DonationHistoryPage() {
  const [status, setStatus] = useState<DonationRequestStatus | "">("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState<DonationRequest | null>(null);
  const [form] = Form.useForm<EditFormValues>();
  const { message } = useFeedback();

  const { data, isLoading, isError, refetch } = useMyDonationRequests(page, status);
  const cancelMutation = useCancelDonationRequest();
  const updateMutation = useUpdateDonationRequest();

  const openEdit = (item: DonationRequest) => {
    setEditing(item);
    form.setFieldsValue({
      ngayHienMauDuKien: dayjs(item.ngayHienMauDuKien),
      ngayPhucHoiGanNhat: item.ngayPhucHoiGanNhat ? dayjs(item.ngayPhucHoiGanNhat) : undefined,
      loaiHien: item.loaiHien,
      soLuong: item.soLuong,
      sucKhoeHienTai: item.sucKhoeHienTai,
      dangMangThai: item.dangMangThai ?? 0,
      macBenhTruyenNhiem: item.macBenhTruyenNhiem ?? 0,
      ghiChu: item.ghiChu,
    });
  };

  const handleUpdate = async (values: EditFormValues) => {
    if (!editing) return;
    try {
      await updateMutation.mutateAsync({
        id: editing.id,
        ngayHienMauDuKien: toApiDate(values.ngayHienMauDuKien) as string,
        ngayPhucHoiGanNhat: toApiDate(values.ngayPhucHoiGanNhat) as string,
        ghiChu: values.ghiChu,
        loaiHien: values.loaiHien,
        trangThai: "dangcho",
        soLuong: Number(values.soLuong),
        sucKhoeHienTai: values.sucKhoeHienTai,
        dangMangThai: values.dangMangThai,
        macBenhTruyenNhiem: values.macBenhTruyenNhiem,
      });
      message.success("Cập nhật yêu cầu hiến máu thành công!");
      setEditing(null);
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleCancel = async (id: number) => {
    try {
      await cancelMutation.mutateAsync(id);
      message.success("Đã hủy yêu cầu hiến máu.");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  return (
    <div>
      <PageHeader
        title="Lịch sử đăng ký hiến máu"
        extra={
          <Select
            value={status}
            onChange={(v) => {
              setStatus(v);
              setPage(1);
            }}
            options={STATUS_OPTIONS}
            style={{ width: 200 }}
          />
        }
      />

      {isLoading ? (
        <LoadingBlock />
      ) : isError ? (
        <ErrorState onRetry={refetch} />
      ) : !data || data.content.length === 0 ? (
        <EmptyState title="Chưa có yêu cầu hiến máu nào" description="Đăng ký tham gia một chiến dịch để bắt đầu." />
      ) : (
        <>
          <div style={{ display: "grid", gap: 16 }}>
            {data.content.map((item) => {
              const statusMeta = donationRequestStatusMap[item.trangThai];
              const componentMeta = donationComponentMap[item.loaiHien];
              const canEdit = item.trangThai === "dangcho";
              return (
                <div
                  key={item.id}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)",
                    padding: 20,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>
                        Ngày hiến dự kiến: {formatDate(item.ngayHienMauDuKien)}
                      </div>
                      <div style={{ marginTop: 8, display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
                        <StatusTag label={componentMeta.label} tone={componentMeta.tone} />
                      </div>
                    </div>
                    {canEdit && (
                      <div style={{ display: "flex", gap: 8 }}>
                        <Button onClick={() => openEdit(item)}>Cập nhật</Button>
                        <ConfirmButton
                          danger
                          confirmTitle="Hủy yêu cầu hiến máu này?"
                          onConfirm={() => handleCancel(item.id)}
                        >
                          Hủy yêu cầu
                        </ConfirmButton>
                      </div>
                    )}
                  </div>
                  <div style={{ marginTop: 12, fontSize: 14, color: "var(--color-text-secondary)", display: "grid", gap: 4 }}>
                    <span>Số lượng: {item.soLuong} ml</span>
                    {item.ghiChu && <span>Ghi chú: {item.ghiChu}</span>}
                    {item.nguoiDuyet && <span>Người duyệt: {item.nguoiDuyet.ten}</span>}
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Pagination current={page} total={data.totalElements} pageSize={data.size || 10} showSizeChanger={false} onChange={setPage} />
          </div>
        </>
      )}

      <Modal title="Cập nhật yêu cầu hiến máu" open={Boolean(editing)} onCancel={() => setEditing(null)} footer={null} width={700} destroyOnClose>
        <Form form={form} layout="vertical" onFinish={handleUpdate}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Ngày hiến máu dự kiến" name="ngayHienMauDuKien" rules={[{ required: true, message: "Vui lòng chọn ngày hiến máu" }]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ngày phục hồi gần nhất" name="ngayPhucHoiGanNhat" rules={[{ required: true, message: "Vui lòng chọn ngày phục hồi" }]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Loại hiến máu" name="loaiHien" rules={[{ required: true, message: "Vui lòng chọn loại hiến máu" }]}>
                <Select
                  options={[
                    { value: "toanphan", label: "Toàn phần" },
                    { value: "hongcau", label: "Hồng cầu" },
                    { value: "tieucau", label: "Tiểu cầu" },
                    { value: "huyettuong", label: "Huyết tương" },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số lượng máu hiến" name="soLuong" rules={[{ required: true, message: "Vui lòng chọn số lượng" }]}>
                <Select options={[{ value: 350, label: "350 ml" }, { value: 250, label: "250 ml" }]} />
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
              <Form.Item label="Sức khỏe hiện tại" name="sucKhoeHienTai">
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Ghi chú" name="ghiChu">
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" block loading={updateMutation.isPending}>
            Cập nhật
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
