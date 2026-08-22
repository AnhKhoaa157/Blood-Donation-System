import { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Form, Input, Modal, Row, Tag } from "antd";
import { EditOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAvailableBloodUnits,
  useCompleteReceiveRequest,
  useMarkReceiveRequestAvailable,
  useRejectReceiveRequest,
  useReceiveRequestDetailAdmin,
  useUsedBloodUnits,
} from "./api";
import { bloodUnitStatusMap, donationComponentMap, receiveRequestStatusMap } from "../../lib/status/maps";
import { formatDate, formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { HealthExamResult } from "../../lib/api/types";

export default function StaffReceiveDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: request, isLoading, isError, refetch } = useReceiveRequestDetailAdmin(id);
  const { data: availableUnits = [] } = useAvailableBloodUnits(request?.trangThai === "dangcho" ? id : undefined);
  const { data: usedUnits = [] } = useUsedBloodUnits(id);

  const [selected, setSelected] = useState<number[]>([]);
  const [note, setNote] = useState("");
  const [examOpen, setExamOpen] = useState(false);
  const [examData, setExamData] = useState<HealthExamResult | null>(null);
  const [examForm] = Form.useForm<HealthExamResult>();

  const availableMutation = useMarkReceiveRequestAvailable(id as string);
  const rejectMutation = useRejectReceiveRequest(id as string);
  const completeMutation = useCompleteReceiveRequest(id as string);

  useEffect(() => {
    if (request?.formKham && typeof request.formKham === "string") {
      try {
        setExamData(JSON.parse(request.formKham));
      } catch {
        // ignore malformed legacy data
      }
    }
  }, [request]);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !request) return <ErrorState onRetry={refetch} />;

  const statusMeta = receiveRequestStatusMap[request.trangThai];

  const handleMarkAvailable = async () => {
    if (selected.length === 0) return message.warning("Vui lòng chọn ít nhất một đơn vị máu.");
    try {
      await availableMutation.mutateAsync({ danhSachKhoDonViMau: selected });
      message.success("Đã chuyển sang trạng thái 'Đã có máu'.");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleReject = async () => {
    if (!note) return message.error("Vui lòng nhập lý do hủy vào ô ghi chú.");
    try {
      await rejectMutation.mutateAsync({ ghiChu: note, formKham: examData ? JSON.stringify(examData) : undefined });
      message.success("Yêu cầu nhận máu đã bị hủy.");
      navigate("/employee/yeu-cau-nhan-mau");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleComplete = async () => {
    if (!examData) return message.error("Chưa có dữ liệu khám sức khỏe.");
    try {
      await completeMutation.mutateAsync({ ghiChu: note, formKham: JSON.stringify(examData) });
      message.success("Yêu cầu nhận máu đã hoàn thành.");
      navigate("/employee/yeu-cau-nhan-mau");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const renderActions = () => {
    if (request.trangThai === "dangcho") {
      return (
        <Button type="primary" onClick={handleMarkAvailable} loading={availableMutation.isPending}>
          Chuyển sang "Đã có máu"
        </Button>
      );
    }
    if (request.trangThai === "dacomau") {
      if (!examData) {
        return <Button type="primary" icon={<MedicineBoxOutlined />} onClick={() => setExamOpen(true)}>Nhập thông tin khám</Button>;
      }
      return (
        <>
          <Button icon={<EditOutlined />} onClick={() => setExamOpen(true)}>Chỉnh sửa kết quả</Button>
          <Button danger onClick={handleReject} loading={rejectMutation.isPending}>Hủy</Button>
          <Button type="primary" onClick={handleComplete} loading={completeMutation.isPending}>Hoàn thành</Button>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <PageHeader title="Chi tiết yêu cầu nhận máu" extra={<Button onClick={() => navigate("/employee/yeu-cau-nhan-mau")}>Quay lại</Button>} />
      <Card>
        <div style={{ marginBottom: 16 }}>
          <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
        </div>
        <Descriptions bordered column={2} size="middle">
          <Descriptions.Item label="Người nhận">{request.nguoiNhan.ten}</Descriptions.Item>
          <Descriptions.Item label="Email">{request.nguoiNhan.email}</Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">{request.nguoiNhan.soDienThoai}</Descriptions.Item>
          <Descriptions.Item label="Nhóm máu cần">
            <Tag color="red">{request.nhomMau?.ten}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Thành phần máu cần">{donationComponentMap[request.thanhPhanMauCan].label}</Descriptions.Item>
          <Descriptions.Item label="Số lượng cần">{request.soLuongDonVi} đơn vị</Descriptions.Item>
          <Descriptions.Item label="Ngày yêu cầu">{formatDateTime(request.ngayTao)}</Descriptions.Item>
          <Descriptions.Item label="Ngày nhận dự kiến">{formatDate(request.ngayNhanMauDuKien)}</Descriptions.Item>
          <Descriptions.Item label="Lý do" span={2}>{request.lyDo || "—"}</Descriptions.Item>
          <Descriptions.Item label="Địa chỉ nhận máu" span={2}>{request.diaChiNhanMau}</Descriptions.Item>
        </Descriptions>

        {examData && (
          <Descriptions title="Kết quả khám sàng lọc trước nhận máu" bordered size="middle" column={2} style={{ marginTop: 24 }}>
            <Descriptions.Item label="Chiều cao (cm)">{examData.chieuCao}</Descriptions.Item>
            <Descriptions.Item label="Cân nặng (kg)">{examData.canNang}</Descriptions.Item>
            <Descriptions.Item label="Huyết áp">{examData.huyetAp}</Descriptions.Item>
            <Descriptions.Item label="Nhiệt độ">{examData.nhietDo}</Descriptions.Item>
            <Descriptions.Item label="Kết luận" span={2}>{examData.ketLuan || "(Không có)"}</Descriptions.Item>
          </Descriptions>
        )}

        <Form layout="vertical" style={{ marginTop: 24 }}>
          {request.trangThai === "dacomau" && (
            <Form.Item label="Ghi chú (lý do hủy nếu có)">
              <Input.TextArea rows={3} value={note} onChange={(e) => setNote(e.target.value)} />
            </Form.Item>
          )}

          {request.trangThai === "dangcho" && (
            <Form.Item label="Chọn đơn vị máu phù hợp (còn hạn sử dụng, đã xét nghiệm)">
              {availableUnits.length === 0 ? (
                <i style={{ color: "var(--color-text-muted)" }}>Không có đơn vị máu phù hợp trong kho.</i>
              ) : (
                <Row gutter={[16, 16]}>
                  {availableUnits.map((unit) => {
                    const checked = selected.includes(unit.id);
                    const unitStatus = bloodUnitStatusMap[unit.trangThai];
                    return (
                      <Col xs={24} sm={12} md={8} key={unit.id}>
                        <div
                          onClick={() => setSelected((prev) => (checked ? prev.filter((x) => x !== unit.id) : [...prev, unit.id]))}
                          style={{
                            border: checked ? "2px solid var(--color-success)" : "1px solid var(--color-border)",
                            background: checked ? "var(--color-success-bg)" : "var(--color-surface)",
                            borderRadius: "var(--radius-md)",
                            padding: 14,
                            cursor: "pointer",
                          }}
                        >
                          <div style={{ fontWeight: 700 }}>{unit.nhomMau.ten} — {unit.soLuong} ml</div>
                          <StatusTag label={unitStatus.label} tone={unitStatus.tone} />
                          <div style={{ fontSize: 13, marginTop: 6, color: "var(--color-text-muted)" }}>
                            Ngày lấy: {formatDate(unit.ngayLayMau)} · HSD: {formatDate(unit.ngayHetHan)}
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              )}
            </Form.Item>
          )}

          {usedUnits.length > 0 && (
            <Form.Item label="Đơn vị máu đã sử dụng cho yêu cầu này">
              <Row gutter={[16, 16]}>
                {usedUnits.map((unit) => {
                  const unitStatus = bloodUnitStatusMap[unit.trangThai];
                  return (
                    <Col xs={24} sm={12} md={8} key={unit.id}>
                      <div style={{ border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: 14, background: "var(--color-surface-alt)" }}>
                        <div style={{ fontWeight: 700 }}>{unit.nhomMau.ten} — {unit.soLuong} ml</div>
                        <StatusTag label={unitStatus.label} tone={unitStatus.tone} />
                        <div style={{ fontSize: 13, marginTop: 6, color: "var(--color-text-muted)" }}>
                          Ngày lấy: {formatDate(unit.ngayLayMau)} · HSD: {formatDate(unit.ngayHetHan)}
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Form.Item>
          )}

          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 12 }}>{renderActions()}</div>
        </Form>
      </Card>

      <Modal title="Phiếu khám sàng lọc trước nhận máu" open={examOpen} onCancel={() => setExamOpen(false)} footer={null} width={800} destroyOnClose>
        <Form
          form={examForm}
          layout="vertical"
          initialValues={examData ?? {}}
          onFinish={(values) => {
            setExamData(values);
            setExamOpen(false);
            message.success("Đã lưu kết quả khám!");
          }}
        >
          <Row gutter={24}>
            <Col span={12}><Form.Item name="chieuCao" label="Chiều cao (cm)" rules={[{ required: true }]}><Input /></Form.Item></Col>
            <Col span={12}><Form.Item name="canNang" label="Cân nặng (kg)" rules={[{ required: true }]}><Input /></Form.Item></Col>
            <Col span={12}><Form.Item name="huyetAp" label="Huyết áp (mmHg)" rules={[{ required: true }]}><Input placeholder="Ví dụ: 120/80" /></Form.Item></Col>
            <Col span={12}><Form.Item name="nhietDo" label="Nhiệt độ (°C)" rules={[{ required: true }]}><Input /></Form.Item></Col>
            <Col span={24}><Form.Item name="ketLuan" label="Kết luận / Xét nghiệm hòa hợp"><Input.TextArea rows={2} /></Form.Item></Col>
          </Row>
          <div style={{ textAlign: "right" }}>
            <Button onClick={() => setExamOpen(false)} style={{ marginRight: 8 }}>Hủy</Button>
            <Button type="primary" htmlType="submit">Lưu kết quả</Button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
