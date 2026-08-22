import { Card, Col, Row } from "antd";
import {
  BankOutlined,
  BellOutlined,
  FileTextOutlined,
  HeartOutlined,
  ProjectOutlined,
  RetweetOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useDashboardAnalysis } from "./api";
import { palette } from "../../styles/palette";
import PageHeader from "../../components/PageHeader";
import KpiCard from "../../components/KpiCard";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import type { DashboardAnalysis } from "../../lib/api/types";

const STAT_META: {
  key: keyof DashboardAnalysis;
  label: string;
  icon: React.ReactNode;
  tone: "primary" | "accent" | "success" | "warning" | "info" | "neutral";
}[] = [
  { key: "totalBloodDonationRequest", label: "Yêu cầu hiến máu", icon: <HeartOutlined />, tone: "primary" },
  { key: "totalBloodReceiveRequest", label: "Yêu cầu nhận máu", icon: <RetweetOutlined />, tone: "accent" },
  { key: "totalBloodUnitWareHouse", label: "Đơn vị máu tồn kho", icon: <BankOutlined />, tone: "info" },
  { key: "totalBlood", label: "Nhóm máu", icon: <TeamOutlined />, tone: "success" },
  { key: "totalCustomer", label: "Người dùng", icon: <UserOutlined />, tone: "primary" },
  { key: "totalEmployee", label: "Nhân viên", icon: <TeamOutlined />, tone: "accent" },
  { key: "totalBloodDonationActivity", label: "Chiến dịch hiến máu", icon: <ProjectOutlined />, tone: "info" },
  { key: "totalBlog", label: "Bài viết", icon: <FileTextOutlined />, tone: "neutral" },
];

export default function AdminOverviewPage() {
  const { data, isLoading, isError, refetch } = useDashboardAnalysis();

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !data) return <ErrorState onRetry={refetch} />;

  const chartData = STAT_META.map((meta) => ({ label: meta.label, value: data[meta.key] ?? 0 }));

  return (
    <div>
      <PageHeader title="Tổng quan hệ thống" description="Số liệu hoạt động chính của toàn hệ thống." />

      <Row gutter={[16, 16]}>
        {STAT_META.map((meta) => (
          <Col xs={24} sm={12} lg={6} key={meta.key}>
            <KpiCard label={meta.label} value={data[meta.key] ?? 0} icon={meta.icon} tone={meta.tone} />
          </Col>
        ))}
      </Row>

      <Card title="Biểu đồ thống kê tổng quan" style={{ marginTop: 24 }}>
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke={palette.border} />
            <XAxis dataKey="label" tick={{ fontSize: 12 }} interval={0} angle={-15} textAnchor="end" height={70} />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Số lượng" fill={palette.primary} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <div style={{ marginTop: 8, color: "var(--color-text-muted)", fontSize: 13 }}>
        <BellOutlined /> Số liệu được cập nhật theo thời gian thực từ hệ thống.
      </div>
    </div>
  );
}
