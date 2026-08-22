import { useEffect, useState } from "react";
import { Button, Card, Col, Descriptions, Form, Input, Modal, Row, Select, Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined, MedicineBoxOutlined, SaveOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useApproveDonationRequestMutation,
  useCompleteDonationRequestMutation,
  useDonationRequestDetailAdmin,
  useRejectDonationRequestMutation,
} from "./api";
import { donationComponentMap, donationRequestStatusMap, genderLabel } from "../../lib/status/maps";
import { formatDate, formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { HealthExamResult } from "../../lib/api/types";

export default function StaffDonationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: request, isLoading, isError, refetch } = useDonationRequestDetailAdmin(id);
  const [note, setNote] = useState("");
  const [examOpen, setExamOpen] = useState(false);
  const [examData, setExamData] = useState<HealthExamResult | null>(null);
  const [examForm] = Form.useForm<HealthExamResult>();

  const approveMutation = useApproveDonationRequestMutation(id as string);
  const rejectMutation = useRejectDonationRequestMutation(id as string);
  const completeMutation = useCompleteDonationRequestMutation(id as string);

  useEffect(() => {
    if (request?.formKham) {
      try {
        setExamData(JSON.parse(request.formKham));
      } catch {
        // ignore malformed legacy data
      }
    }
  }, [request?.formKham]);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !request) return <ErrorState onRetry={refetch} />;

  const statusMeta = donationRequestStatusMap[request.trangThai];
  const componentMeta = donationComponentMap[request.loaiHien];

  const handleApprove = async () => {
    if (!note) return message.error("Bạn cần nhập ghi chú khi duyệt yêu cầu.");
    try {
      await approveMutation.mutateAsync(note);
      message.success("Yêu cầu hiến máu đã được duyệt!");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleReject = async () => {
    if (!note) return message.error("Bạn cần nhập ghi chú khi từ chối yêu cầu.");
    try {
      await rejectMutation.mutateAsync({ ghiChu: note, formKham: examData ? JSON.stringify(examData) : undefined });
      message.success("Yêu cầu hiến máu đã bị từ chối!");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const handleComplete = async () => {
    if (!note) return message.error("Bạn cần nhập vị trí lưu trữ vào ô ghi chú.");
    if (!examData) return message.error("Chưa có dữ liệu khám sức khỏe.");
    try {
      await completeMutation.mutateAsync({ viTriLuuTru: note, formKham: JSON.stringify(examData) });
      message.success("Yêu cầu hiến máu đã hoàn thành!");
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  const renderActions = () => {
    if (request.trangThai === "dangcho") {
      return (
        <>
          <Button type="primary" icon={<CheckCircleOutlined />} onClick={handleApprove} loading={approveMutation.isPending}>
            Duyệt
          </Button>
          <Button danger icon={<CloseCircleOutlined />} onClick={handleReject} loading={rejectMutation.isPending}>
            Từ chối
          </Button>
        </>
      );
    }
    if (request.trangThai === "xacnhan") {
      if (!examData) {
        return (
          <Button type="primary" icon={<MedicineBoxOutlined />} onClick={() => setExamOpen(true)}>
            Nhập thông tin khám
          </Button>
        );
      }
      return (
        <>
          <Button icon={<EditOutlined />} onClick={() => setExamOpen(true)}>Chỉnh sửa kết quả</Button>
          <Button danger icon={<CloseCircleOutlined />} onClick={handleReject} loading={rejectMutation.isPending}>Từ chối</Button>
          <Button type="primary" icon={<SaveOutlined />} onClick={handleComplete} loading={completeMutation.isPending}>Hoàn thành</Button>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <PageHeader
        title="Chi tiết yêu cầu hiến máu"
        extra={<Button onClick={() => navigate("/employee/yeu-cau-hien-mau")}>Quay lại</Button>}
      />
      <Card>
        <div style={{ marginBottom: 16 }}>
          <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
        </div>
        <Descriptions bordered column={3} size="middle">
          <Descriptions.Item label="Người hiến">{request.nguoiHien.ten}</Descriptions.Item>
          <Descriptions.Item label="Email">{request.nguoiHien.email}</Descriptions.Item>
          <Descriptions.Item label="Số điện thoại">{request.nguoiHien.soDienThoai}</Descriptions.Item>
          <Descriptions.Item label="Ngày sinh">{formatDate(request.nguoiHien.ngaySinh)}</Descriptions.Item>
          <Descriptions.Item label="Giới tính">{request.nguoiHien.gioiTinh ? genderLabel[request.nguoiHien.gioiTinh] : "—"}</Descriptions.Item>
          <Descriptions.Item label="Nhóm máu">{request.nguoiHien.nhomMau?.ten}{request.nguoiHien.yeuToRh}</Descriptions.Item>
          <Descriptions.Item label="Chiều cao / Cân nặng">{request.nguoiHien.chieuCao} cm / {request.nguoiHien.canNang} kg</Descriptions.Item>
          <Descriptions.Item label="Loại hiến"><Tag color="blue">{componentMeta.label}</Tag></Descriptions.Item>
          <Descriptions.Item label="Số lượng">{request.soLuong} ml</Descriptions.Item>
          <Descriptions.Item label="Ngày yêu cầu">{formatDateTime(request.ngayTao)}</Descriptions.Item>
          <Descriptions.Item label="Ngày hiến dự kiến">{formatDate(request.ngayHienMauDuKien)}</Descriptions.Item>
          <Descriptions.Item label="Ghi chú" span={3}>{request.ghiChu || "—"}</Descriptions.Item>
          {request.nguoiDuyet && <Descriptions.Item label="Người duyệt" span={3}>{request.nguoiDuyet.ten}</Descriptions.Item>}
        </Descriptions>

        {examData && (
          <Descriptions title="Kết quả khám sàng lọc" bordered size="middle" column={2} style={{ marginTop: 24 }}>
            <Descriptions.Item label="Chiều cao (cm)">{examData.chieuCao}</Descriptions.Item>
            <Descriptions.Item label="Cân nặng (kg)">{examData.canNang}</Descriptions.Item>
            <Descriptions.Item label="Huyết áp (mmHg)">{examData.huyetAp}</Descriptions.Item>
            <Descriptions.Item label="Nhiệt độ (°C)">{examData.nhietDo}</Descriptions.Item>
            <Descriptions.Item label="Huyết sắc tố" span={2}>
              <Tag color={examData.kiemTraHuyetSacTo === "Đủ" ? "success" : "warning"}>{examData.kiemTraHuyetSacTo}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Kết luận" span={2}>{examData.ketLuan || "(Không có)"}</Descriptions.Item>
          </Descriptions>
        )}

        <Form layout="vertical" style={{ marginTop: 24 }}>
          <Form.Item label="Ghi chú / Lý do / Vị trí lưu trữ">
            <Input.TextArea rows={3} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Nhập ghi chú cho hành động tương ứng..." />
          </Form.Item>
          <div style={{ textAlign: "right", display: "flex", gap: 8, justifyContent: "flex-end" }}>{renderActions()}</div>
        </Form>
      </Card>

      <Modal title="Phiếu khám sàng lọc sức khỏe" open={examOpen} onCancel={() => setExamOpen(false)} footer={null} width={800} destroyOnClose>
        <Form
          form={examForm}
          layout="vertical"
          initialValues={examData ?? { kiemTraHuyetSacTo: "Đủ", suDungChatKichThich: "Không", dangDungThuoc: "Không" }}
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
            <Col span={12}>
              <Form.Item name="suDungChatKichThich" label="Sử dụng chất kích thích" rules={[{ required: true }]}>
                <Select options={[{ value: "Không", label: "Không" }, { value: "Thỉnh thoảng", label: "Thỉnh thoảng" }, { value: "Thường xuyên", label: "Thường xuyên" }]} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="kiemTraHuyetSacTo" label="Kiểm tra huyết sắc tố" rules={[{ required: true }]}>
                <Select options={[{ value: "Đủ", label: "Đủ điều kiện" }, { value: "Không đủ", label: "Không đủ điều kiện" }]} />
              </Form.Item>
            </Col>
            <Col span={24}><Form.Item name="benhManTinh" label="Bệnh mạn tính"><Input.TextArea rows={2} /></Form.Item></Col>
            <Col span={24}><Form.Item name="nguyCoLayNhiem" label="Nguy cơ lây nhiễm qua đường máu"><Input.TextArea rows={2} /></Form.Item></Col>
            <Col span={24}><Form.Item name="ketLuan" label="Kết luận"><Input.TextArea rows={2} /></Form.Item></Col>
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
