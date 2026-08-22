import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Pagination, Row, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import {
  useCancelReceiveRequest,
  useCreateReceiveRequest,
  useMyReceiveRequests,
  useUpdateReceiveRequest,
} from "./api";
import { useBloodTypes } from "../blood-types/api";
import { receiveRequestStatusMap } from "../../lib/status/maps";
import { formatDate, dayjs, toApiDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import ConfirmButton from "../../components/ConfirmButton";
import LoadingBlock from "../../components/states/LoadingBlock";
import EmptyState from "../../components/states/EmptyState";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { DonationComponent, ReceiveRequest } from "../../lib/api/types";

const COMPONENT_OPTIONS = [
  { value: "toanphan", label: "Toàn phần" },
  { value: "hongcau", label: "Hồng cầu" },
  { value: "tieucau", label: "Tiểu cầu" },
  { value: "huyettuong", label: "Huyết tương" },
];

const STATUS_OPTIONS = [
  { value: "", label: "Tất cả" },
  { value: "dangcho", label: "Đang chờ" },
  { value: "dacomau", label: "Đã có máu" },
  { value: "dangketnoi", label: "Đang kết nối" },
  { value: "dahoanthanh", label: "Đã hoàn thành" },
  { value: "huy", label: "Đã hủy" },
];

interface ReceiveFormValues {
  thanhPhanMauCan: DonationComponent;
  ngayNhanMauDuKien: Dayjs;
  nhomMau: number;
  soLuongDonVi: number;
  diaChiNhanMau: string;
  lyDo: string;
  sucKhoeHienTai: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
}

export default function DonorReceiveRequestsPage() {
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<ReceiveRequest | null>(null);
  const [form] = Form.useForm<ReceiveFormValues>();
  const { message } = useFeedback();

  const { data, isLoading, isError, refetch } = useMyReceiveRequests(page, status);
  const { data: bloodTypes = [] } = useBloodTypes();
  const createMutation = useCreateReceiveRequest();
  const updateMutation = useUpdateReceiveRequest(editing?.id ?? "");
  const cancelMutation = useCancelReceiveRequest();

  const openCreate = () => {
    setEditing(null);
    form.resetFields();
    setModalOpen(true);
  };

  const openEdit = (item: ReceiveRequest) => {
    setEditing(item);
    form.setFieldsValue({
      thanhPhanMauCan: item.thanhPhanMauCan,
      ngayNhanMauDuKien: dayjs(item.ngayNhanMauDuKien),
      nhomMau: item.nhomMau?.id,
      soLuongDonVi: item.soLuongDonVi,
      diaChiNhanMau: item.diaChiNhanMau,
      lyDo: item.lyDo,
      sucKhoeHienTai: item.sucKhoeHienTai,
      dangMangThai: item.dangMangThai ?? 0,
      macBenhTruyenNhiem: item.macBenhTruyenNhiem ?? 0,
    });
    setModalOpen(true);
  };

  const handleSubmit = async (values: ReceiveFormValues) => {
    const payload = {
      ...values,
      ngayNhanMauDuKien: toApiDate(values.ngayNhanMauDuKien) as string,
      soLuongDonVi: Number(values.soLuongDonVi),
    };
    try {
      if (editing) {
        await updateMutation.mutateAsync(payload);
        message.success("Đã cập nhật yêu cầu nhận máu.");
      } else {
        await createMutation.mutateAsync(payload);
        message.success("Đã gửi yêu cầu nhận máu.");
      }
      setModalOpen(false);
      form.resetFields();
      setEditing(null);
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleCancel = async (id: number) => {
    try {
      await cancelMutation.mutateAsync(id);
      message.success("Đã hủy yêu cầu nhận máu.");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  return (
    <div>
      <PageHeader
        title="Yêu cầu nhận máu"
        extra={
          <div style={{ display: "flex", gap: 12 }}>
            <Select
              value={status}
              onChange={(v) => {
                setStatus(v);
                setPage(1);
              }}
              options={STATUS_OPTIONS}
              style={{ width: 180 }}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={openCreate}>
              Tạo yêu cầu
            </Button>
          </div>
        }
      />

      {isLoading ? (
        <LoadingBlock />
      ) : isError ? (
        <ErrorState onRetry={refetch} />
      ) : !data || data.content.length === 0 ? (
        <EmptyState title="Chưa có yêu cầu nhận máu nào" action={<Button type="primary" onClick={openCreate}>Tạo yêu cầu đầu tiên</Button>} />
      ) : (
        <>
          <Row gutter={[16, 16]}>
            {data.content.map((item) => {
              const meta = receiveRequestStatusMap[item.trangThai];
              return (
                <Col xs={24} md={12} key={item.id}>
                  <div
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-lg)",
                      padding: 20,
                      height: "100%",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                      <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>{item.diaChiNhanMau}</div>
                      <StatusTag label={meta.label} tone={meta.tone} />
                    </div>
                    <div style={{ marginTop: 8, fontSize: 14, color: "var(--color-text-secondary)", display: "grid", gap: 4 }}>
                      <span>Nhóm máu: {item.nhomMau?.ten ?? "—"}</span>
                      <span>Ngày cần: {formatDate(item.ngayNhanMauDuKien)}</span>
                      <span>Số lượng: {item.soLuongDonVi} đơn vị</span>
                      {item.lyDo && <span>Lý do: {item.lyDo}</span>}
                    </div>
                    {item.trangThai === "dangcho" && (
                      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                        <Button size="small" onClick={() => openEdit(item)}>Cập nhật</Button>
                        <ConfirmButton
                          size="small"
                          danger
                          confirmTitle="Hủy yêu cầu nhận máu này?"
                          onConfirm={() => handleCancel(item.id)}
                        >
                          Hủy yêu cầu
                        </ConfirmButton>
                      </div>
                    )}
                  </div>
                </Col>
              );
            })}
          </Row>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Pagination current={page} total={data.totalElements} pageSize={data.size || 9} showSizeChanger={false} onChange={setPage} />
          </div>
        </>
      )}

      <Modal
        title={editing ? "Cập nhật yêu cầu nhận máu" : "Tạo yêu cầu nhận máu"}
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={null}
        width={760}
        destroyOnClose
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Thành phần máu cần" name="thanhPhanMauCan" rules={[{ required: true, message: "Vui lòng chọn thành phần máu" }]}>
                <Select options={COMPONENT_OPTIONS} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Nhóm máu" name="nhomMau" rules={[{ required: true, message: "Vui lòng chọn nhóm máu" }]}>
                <Select options={bloodTypes.map((b) => ({ value: b.id, label: b.ten }))} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Ngày nhận máu dự kiến" name="ngayNhanMauDuKien" rules={[{ required: true, message: "Vui lòng chọn ngày nhận máu" }]}>
                <DatePicker style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số lượng đơn vị máu" name="soLuongDonVi" rules={[{ required: true, message: "Vui lòng nhập số lượng" }]}>
                <Input type="number" min={1} />
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
              <Form.Item label="Địa chỉ nhận máu" name="diaChiNhanMau" rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}>
                <Input placeholder="Nhập địa chỉ nhận máu" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Lý do" name="lyDo" rules={[{ required: true, message: "Vui lòng nhập lý do" }]}>
                <Input placeholder="Lý do cần nhận máu" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Sức khỏe hiện tại" name="sucKhoeHienTai" rules={[{ required: true, message: "Vui lòng nhập tình trạng sức khỏe" }]}>
                <Input.TextArea rows={2} />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending || updateMutation.isPending}>
            {editing ? "Cập nhật" : "Gửi yêu cầu"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
}
