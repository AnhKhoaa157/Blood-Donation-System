import {
  DropboxOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  HeartOutlined,
  ProjectOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import DashboardShell from "./DashboardShell";

const NAV_ITEMS = [
  { key: "campaigns", path: "/employee/chien-dich", icon: <ProjectOutlined />, label: "Chiến dịch" },
  { key: "donation-requests", path: "/employee/yeu-cau-hien-mau", icon: <HeartOutlined />, label: "Yêu cầu hiến máu" },
  { key: "receive-requests", path: "/employee/yeu-cau-nhan-mau", icon: <RetweetOutlined />, label: "Yêu cầu nhận máu" },
  { key: "blood-units", path: "/employee/kho-don-vi-mau", icon: <DropboxOutlined />, label: "Kho đơn vị máu" },
  { key: "blood-types", path: "/employee/nhom-mau", icon: <ExperimentOutlined />, label: "Nhóm máu" },
  { key: "blogs", path: "/employee/bai-viet", icon: <FileTextOutlined />, label: "Bài viết" },
];

export default function StaffLayout() {
  return <DashboardShell title="Cổng nhân viên" navItems={NAV_ITEMS} />;
}
