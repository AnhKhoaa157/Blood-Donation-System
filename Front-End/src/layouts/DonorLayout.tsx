import { useState } from "react";
import { Avatar, Drawer, Dropdown, Layout, type MenuProps } from "antd";
import { LockOutlined, LogoutOutlined, MenuOutlined, ProfileOutlined, UserOutlined } from "@ant-design/icons";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import NotificationBell from "../features/notifications/NotificationBell";
import SupportButton from "../features/support/SupportButton";
import { useAuth } from "../lib/auth/AuthContext";
import "./DonorLayout.css";

const { Header, Content, Footer } = Layout;

const NAV_LINKS = [
  { to: "/user", label: "Tổng quan", end: true },
  { to: "/user/chien-dich", label: "Chiến dịch" },
  { to: "/user/lich-su-dang-ky", label: "Lịch sử đăng ký" },
  { to: "/user/yeu-cau-nhan-mau", label: "Yêu cầu nhận máu" },
  { to: "/user/nguoi-hien-gan-ban", label: "Người hiến gần bạn" },
  { to: "/user/bai-viet", label: "Bài viết" },
];

export default function DonorLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const accountItems: MenuProps["items"] = [
    { key: "profile", icon: <ProfileOutlined />, label: "Xem hồ sơ" },
    { key: "change-password", icon: <LockOutlined />, label: "Đổi mật khẩu" },
    { type: "divider" },
    { key: "logout", icon: <LogoutOutlined />, label: "Đăng xuất", danger: true },
  ];

  const handleAccountClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "profile") navigate("/user/ho-so");
    if (key === "change-password") navigate("/user/doi-mat-khau");
    if (key === "logout") {
      logout();
      navigate("/");
    }
  };

  return (
    <Layout>
      <Header className="donor-header">
        <div className="donor-header__inner">
          <div className="donor-header__brand" onClick={() => navigate("/user")}>
            <BrandMark tone="dark" size={32} />
            <span>Hiến Máu Cộng Đồng</span>
          </div>

          <nav className="donor-header__nav">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `donor-header__link${isActive ? " donor-header__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="donor-header__actions">
            <NotificationBell />
            <Dropdown menu={{ items: accountItems, onClick: handleAccountClick }} placement="bottomRight">
              <span style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                <Avatar size={32} icon={<UserOutlined />} />
                <span style={{ fontSize: 14 }}>{user?.ten ?? "Tài khoản"}</span>
              </span>
            </Dropdown>
            <MenuOutlined
              className="donor-header__nav-toggle"
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={() => setDrawerOpen(true)}
            />
          </div>
        </div>
      </Header>

      <Drawer title="Menu" open={drawerOpen} onClose={() => setDrawerOpen(false)} placement="right" width={280}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setDrawerOpen(false)}
              style={{ padding: "10px 12px" }}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </Drawer>

      <Content className="donor-content">
        <div className="donor-content__inner">
          <Outlet />
        </div>
      </Content>

      <Footer className="donor-footer">
        <Link to="/chinh-sach-bao-mat" style={{ marginRight: 16 }}>Chính sách bảo mật</Link>
        <Link to="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
        <div style={{ marginTop: 6 }}>© {new Date().getFullYear()} Hiến Máu Cộng Đồng Việt</div>
      </Footer>

      <SupportButton />
    </Layout>
  );
}
