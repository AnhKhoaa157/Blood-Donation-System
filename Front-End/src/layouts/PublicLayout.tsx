import { useState } from "react";
import { Button, Drawer, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import BrandMark from "../components/BrandMark";
import { useAuth } from "../lib/auth/AuthContext";
import { homePathForRole } from "../lib/auth/roles";
import "./PublicLayout.css";

const { Header, Content, Footer } = Layout;

const NAV_LINKS = [
  { to: "/", label: "Trang chủ", end: true },
  { to: "/chien-dich", label: "Chiến dịch" },
  { to: "/cam-nang-hien-mau", label: "Cẩm nang hiến máu" },
  { to: "/bai-viet", label: "Bài viết" },
  { to: "/lien-he", label: "Liên hệ" },
];

export default function PublicLayout() {
  const navigate = useNavigate();
  const { isAuthenticated, role, user } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Layout style={{ background: "var(--color-bg)" }}>
      <Header className="public-header">
        <div className="public-header__inner">
          <div className="public-header__brand" onClick={() => navigate("/")}>
            <BrandMark />
            <span>Hiến Máu Cộng Đồng Việt</span>
          </div>

          <nav className="public-header__nav">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `public-header__link${isActive ? " public-header__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="public-header__actions">
            {isAuthenticated ? (
              <Button type="primary" onClick={() => navigate(homePathForRole(role))}>
                Xin chào, {user?.ten?.split(" ").slice(-1)[0] ?? "bạn"}
              </Button>
            ) : (
              <>
                <Button type="text" onClick={() => navigate("/login")}>
                  Đăng nhập
                </Button>
                <Button type="primary" onClick={() => navigate("/register")}>
                  Đăng ký hiến máu
                </Button>
              </>
            )}
            <Button
              type="text"
              className="public-header__menu-btn"
              icon={<MenuOutlined />}
              onClick={() => setDrawerOpen(true)}
              aria-label="Mở menu"
            />
          </div>
        </div>
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        width={280}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                `public-header__link${isActive ? " public-header__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </Drawer>

      <Content className="public-content">
        <Outlet />
      </Content>

      <Footer className="public-footer">
        <div className="public-footer__inner">
          <div className="public-footer__grid">
            <div>
              <div className="public-footer__brand">
                <BrandMark tone="dark" />
                Hiến Máu Cộng Đồng Việt
              </div>
              <p style={{ maxWidth: 340, lineHeight: 1.7, fontSize: 14 }}>
                Kết nối người hiến máu tình nguyện với các điểm tiếp nhận, giúp
                mỗi giọt máu cho đi đến đúng nơi cần nhất.
              </p>
            </div>
            <div>
              <div className="public-footer__title">Liên kết nhanh</div>
              <ul className="public-footer__list">
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/chien-dich">Chiến dịch hiến máu</Link></li>
                <li><Link to="/cam-nang-hien-mau">Cẩm nang hiến máu</Link></li>
                <li><Link to="/bai-viet">Bài viết</Link></li>
                <li><Link to="/lien-he">Liên hệ</Link></li>
              </ul>
            </div>
            <div>
              <div className="public-footer__title">Liên hệ & hỗ trợ</div>
              <ul className="public-footer__list">
                <li><span>Hotline: 1900 1234</span></li>
                <li><span>Email: support@hienmau.vn</span></li>
                <li><span>Giờ làm việc: 8:00 – 18:00</span></li>
              </ul>
            </div>
          </div>
          <div className="public-footer__bottom">
            <span>© {new Date().getFullYear()} Hiến Máu Cộng Đồng Việt. Đã đăng ký bản quyền.</span>
            <div className="public-footer__bottom-links">
              <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              <Link to="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
              <Link to="/so-do-trang-web">Sơ đồ trang web</Link>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  );
}
