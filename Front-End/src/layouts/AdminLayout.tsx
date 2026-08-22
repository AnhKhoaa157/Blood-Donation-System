import {
  BellOutlined,
  CustomerServiceOutlined,
  HomeOutlined,
  ProjectOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import DashboardShell from "./DashboardShell";

const NAV_ITEMS = [
  { key: "overview", path: "/admin", icon: <HomeOutlined />, label: "Tổng quan" },
  { key: "users", path: "/admin/nguoi-dung", icon: <TeamOutlined />, label: "Người dùng & nhân viên" },
  { key: "campaigns", path: "/admin/chien-dich", icon: <ProjectOutlined />, label: "Chiến dịch" },
  { key: "notifications", path: "/admin/thong-bao", icon: <BellOutlined />, label: "Thông báo" },
  { key: "support", path: "/admin/ho-tro", icon: <CustomerServiceOutlined />, label: "Hỗ trợ" },
];

export default function AdminLayout() {
  return <DashboardShell title="Cổng quản trị" navItems={NAV_ITEMS} />;
}
