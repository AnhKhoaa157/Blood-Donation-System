import { Avatar, Button, Card, Col, Row, Table, Tag, Timeline } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  FilePdfOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  SafetyOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PageHeader from "../../components/PageHeader";

const ELIGIBILITY = [
  "Từ 18 đến 60 tuổi",
  "Cân nặng từ 45kg trở lên",
  "Sức khỏe tốt, không đang mắc bệnh truyền nhiễm",
  "Khoảng cách giữa hai lần hiến đảm bảo đủ thời gian phục hồi theo loại hiến",
];

const RECOVERY_WEEKS: { component: string; weeks: number }[] = [
  { component: "Máu toàn phần", weeks: 12 },
  { component: "Hồng cầu", weeks: 16 },
  { component: "Tiểu cầu", weeks: 2 },
  { component: "Huyết tương", weeks: 2 },
];

const PROCESS_STEPS = [
  { icon: <UserOutlined />, title: "Đăng ký tài khoản", desc: "Tạo tài khoản và cung cấp thông tin cá nhân, nhóm máu cơ bản." },
  { icon: <MedicineBoxOutlined />, title: "Đăng ký chiến dịch", desc: "Chọn chiến dịch hiến máu phù hợp với thời gian và địa điểm của bạn." },
  { icon: <SafetyOutlined />, title: "Khám sàng lọc", desc: "Nhân viên y tế kiểm tra sức khỏe tổng quát trước khi hiến máu." },
  { icon: <HeartOutlined />, title: "Hiến máu", desc: "Quy trình hiến máu an toàn dưới sự giám sát của đội ngũ y tế." },
  { icon: <CheckCircleOutlined />, title: "Theo dõi kết quả", desc: "Theo dõi trạng thái yêu cầu và lịch sử hiến máu ngay trên tài khoản của bạn." },
];

interface BloodTypeInfo {
  ten: string;
  frequency: string;
  canDonateTo: string;
  canReceiveFrom: string;
}

const BLOOD_TYPE_TABLE: BloodTypeInfo[] = [
  { ten: "O-", frequency: "Hiếm", canDonateTo: "Tất cả các nhóm máu", canReceiveFrom: "O-" },
  { ten: "O+", frequency: "Phổ biến", canDonateTo: "Các nhóm Rh dương (A+, B+, AB+, O+)", canReceiveFrom: "O+, O-" },
  { ten: "A+", frequency: "Phổ biến", canDonateTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
  { ten: "A-", frequency: "Hiếm", canDonateTo: "A+, A-, AB+, AB-", canReceiveFrom: "A-, O-" },
  { ten: "B+", frequency: "Phổ biến", canDonateTo: "B+, AB+", canReceiveFrom: "B+, B-, O+, O-" },
  { ten: "B-", frequency: "Hiếm", canDonateTo: "B+, B-, AB+, AB-", canReceiveFrom: "B-, O-" },
  { ten: "AB+", frequency: "Phổ biến", canDonateTo: "AB+", canReceiveFrom: "Tất cả các nhóm máu" },
  { ten: "AB-", frequency: "Rất hiếm", canDonateTo: "AB+, AB-", canReceiveFrom: "A-, B-, AB-, O-" },
];

export default function DonationGuidePage() {
  return (
    <div className="app-container" style={{ padding: "40px 24px 64px" }}>
      <PageHeader
        title="Cẩm nang hiến máu"
        description="Điều kiện tham gia, quy trình hiến máu và thông tin tương thích giữa các nhóm máu."
        extra={
          <Button icon={<FilePdfOutlined />} href="/TaiLieuNhomMau_ChuyenSau.docx" download>
            Tải tài liệu nhóm máu
          </Button>
        }
      />

      <Card title="Điều kiện tham gia hiến máu" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          {ELIGIBILITY.map((item) => (
            <Col xs={24} sm={12} key={item}>
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <CheckCircleOutlined style={{ color: "var(--color-success)", marginTop: 3 }} />
                <span style={{ color: "var(--color-text-secondary)" }}>{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <Card title="Thời gian phục hồi tối thiểu giữa hai lần hiến" style={{ marginBottom: 24 }}>
        <Row gutter={[16, 16]}>
          {RECOVERY_WEEKS.map((r) => (
            <Col xs={12} sm={6} key={r.component}>
              <div style={{ textAlign: "center", padding: 16, background: "var(--color-surface-alt)", borderRadius: "var(--radius-md)" }}>
                <ClockCircleOutlined style={{ fontSize: 20, color: "var(--color-primary)" }} />
                <div style={{ fontWeight: 700, marginTop: 8, color: "var(--color-text-primary)" }}>{r.weeks} tuần</div>
                <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{r.component}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>

      <Card title="Quy trình hiến máu" style={{ marginBottom: 24 }}>
        <Timeline
          items={PROCESS_STEPS.map((step) => ({
            dot: <Avatar size={32} style={{ background: "var(--color-primary)" }} icon={step.icon} />,
            children: (
              <div>
                <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>{step.title}</div>
                <div style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>{step.desc}</div>
              </div>
            ),
          }))}
        />
      </Card>

      <Card title="Tương thích giữa các nhóm máu">
        <Table<BloodTypeInfo>
          rowKey="ten"
          dataSource={BLOOD_TYPE_TABLE}
          pagination={false}
          scroll={{ x: true }}
          columns={[
            { title: "Nhóm máu", dataIndex: "ten", render: (v) => <Tag color="red">{v}</Tag> },
            { title: "Mức độ phổ biến", dataIndex: "frequency" },
            { title: "Có thể hiến cho", dataIndex: "canDonateTo" },
            { title: "Có thể nhận từ", dataIndex: "canReceiveFrom" },
          ]}
        />
        <p style={{ color: "var(--color-text-muted)", fontSize: 13, marginTop: 16, marginBottom: 0 }}>
          Thông tin trên chỉ mang tính tham khảo. Việc truyền máu trong thực tế cần
          được thực hiện đúng quy trình y tế và kiểm tra chéo tại cơ sở y tế.
        </p>
      </Card>
    </div>
  );
}
