import type { ReactNode } from "react";
import { Avatar, Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import { useAuth } from "../lib/auth/AuthContext";

const { Header, Sider, Content, Footer } = Layout;

export interface DashboardNavItem {
  key: string;
  path: string;
  icon: ReactNode;
  label: string;
}

interface DashboardShellProps {
  title: string;
  navItems: DashboardNavItem[];
}

/** Shared sider+header shell for the staff and admin portals — only the
 * menu items and header title differ between the two roles. */
export default function DashboardShell({ title, navItems }: DashboardShellProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();

  const selectedKey =
    [...navItems]
      .sort((a, b) => b.path.length - a.path.length)
      .find((item) => location.pathname === item.path || location.pathname.startsWith(`${item.path}/`))
      ?.key ?? "";

  const menuItems = [
    ...navItems.map((item) => ({
      key: item.key,
      icon: item.icon,
      label: <Link to={item.path}>{item.label}</Link>,
    })),
    { type: "divider" as const },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Đăng xuất",
      onClick: () => {
        logout();
        navigate("/login");
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={248} breakpoint="lg" collapsedWidth={0} theme="dark">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "20px 16px",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          <BrandMark tone="dark" size={32} />
          <span style={{ fontSize: 15, lineHeight: 1.3 }}>Hiến Máu Cộng Đồng</span>
        </div>
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
      </Sider>

      <Layout>
        <Header
          style={{
            background: "var(--color-surface)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <span style={{ fontWeight: 700, fontSize: 17, color: "var(--color-text-primary)" }}>
            {title}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar size={32} icon={<UserOutlined />} />
            <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>
              {user?.ten ?? "Tài khoản"}
            </span>
          </span>
        </Header>
        <Content style={{ margin: 24 }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center", color: "var(--color-text-muted)" }}>
          © {new Date().getFullYear()} Hệ thống quản lý hiến máu.
        </Footer>
      </Layout>
    </Layout>
  );
}
