import { Button, Skeleton, Tag } from "antd";
import {
  ArrowRightOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  SafetyOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useCampaigns } from "../campaigns/api";
import { formatDate } from "../../lib/format/date";
import EmptyState from "../../components/states/EmptyState";
import "./HomePage.css";

const FEATURES = [
  {
    icon: <HeartOutlined />,
    tone: "primary",
    title: "Đăng ký hiến máu",
    desc: "Chọn chiến dịch phù hợp, đăng ký lịch hiến máu và theo dõi trạng thái yêu cầu theo thời gian thực.",
  },
  {
    icon: <MedicineBoxOutlined />,
    tone: "accent",
    title: "Yêu cầu nhận máu",
    desc: "Gửi yêu cầu nhận máu khi cần, hệ thống kết nối với kho đơn vị máu sẵn sàng gần bạn nhất.",
  },
  {
    icon: <TeamOutlined />,
    tone: "success",
    title: "Cộng đồng người hiến",
    desc: "Tìm người hiến máu tình nguyện gần khu vực của bạn để hỗ trợ lẫn nhau khi cần thiết.",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const { data, isLoading } = useCampaigns(1, "sapdienra");
  const campaigns = data?.content?.slice(0, 3) ?? [];

  return (
    <div>
      <section className="home-hero">
        <div className="home-hero__inner">
          <div>
            <div className="home-hero__badge">
              <HeartOutlined /> Hệ thống hiến máu tình nguyện
            </div>
            <h1 className="home-hero__title">
              Mỗi giọt máu cho đi, <span>một cuộc đời ở lại</span>
            </h1>
            <p className="home-hero__desc">
              Nền tảng kết nối người hiến máu tình nguyện với các chiến dịch hiến
              máu và người cần máu trên khắp cả nước — đăng ký nhanh, theo dõi rõ
              ràng, an toàn theo quy trình y tế.
            </p>
            <div className="home-hero__actions">
              <Button type="primary" size="large" icon={<HeartOutlined />} onClick={() => navigate("/register")}>
                Đăng ký hiến máu
              </Button>
              <Button size="large" icon={<ArrowRightOutlined />} onClick={() => navigate("/chien-dich")}>
                Xem chiến dịch
              </Button>
            </div>
          </div>
          <div className="home-hero__stats">
            <div className="home-stat">
              <div className="home-stat__value">3</div>
              <div className="home-stat__label">Sinh mạng có thể được cứu mỗi lần hiến</div>
            </div>
            <div className="home-stat">
              <div className="home-stat__value">8</div>
              <div className="home-stat__label">Nhóm máu được quản lý trong hệ thống</div>
            </div>
            <div className="home-stat">
              <div className="home-stat__value">24/7</div>
              <div className="home-stat__label">Tiếp nhận yêu cầu nhận máu khẩn cấp</div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">Chúng tôi có thể giúp gì?</h2>
          <p className="home-section__desc">
            Một nền tảng duy nhất cho toàn bộ hành trình hiến máu và nhận máu của bạn.
          </p>
        </div>
        <div className="home-feature-grid">
          {FEATURES.map((f) => (
            <div className="home-feature-card" key={f.title}>
              <div
                className="home-feature-card__icon"
                style={{ color: `var(--color-${f.tone})`, background: `var(--color-${f.tone}-bg)` }}
              >
                {f.icon}
              </div>
              <h3 style={{ margin: "0 0 8px", color: "var(--color-text-primary)" }}>{f.title}</h3>
              <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section" style={{ paddingTop: 0 }}>
        <div className="home-section__header">
          <h2 className="home-section__title">Chiến dịch sắp diễn ra</h2>
          <p className="home-section__desc">Tham gia một chiến dịch gần bạn ngay hôm nay.</p>
        </div>

        {isLoading ? (
          <Skeleton active paragraph={{ rows: 4 }} />
        ) : campaigns.length === 0 ? (
          <EmptyState title="Chưa có chiến dịch sắp diễn ra" description="Vui lòng quay lại sau." />
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {campaigns.map((c) => (
              <Link
                key={c.id}
                to={`/chien-dich/${c.id}`}
                style={{
                  display: "block",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  boxShadow: "var(--shadow-sm)",
                  color: "inherit",
                }}
              >
                <Tag color="blue" style={{ marginBottom: 10 }}>
                  <EnvironmentOutlined /> {c.diaDiem}
                </Tag>
                <h3 style={{ margin: "0 0 8px", color: "var(--color-text-primary)", fontSize: 17 }}>{c.ten}</h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: 13, margin: 0 }}>
                  {formatDate(c.ngayBatDau)} – {formatDate(c.ngayKetThuc)}
                </p>
                <p style={{ color: "var(--color-text-secondary)", fontSize: 13, marginTop: 8 }}>
                  {c.soLuongNguoiDangKyHienTai}/{c.soLuongNguoiToiDa} người đăng ký
                </p>
              </Link>
            ))}
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <Link to="/chien-dich">
            <Button icon={<ArrowRightOutlined />}>Xem tất cả chiến dịch</Button>
          </Link>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__inner">
          <SafetyOutlined style={{ fontSize: 36, color: "var(--color-primary)", marginBottom: 12 }} />
          <div className="home-cta__title">Sẵn sàng trở thành người hùng?</div>
          <p className="home-cta__desc">
            Đăng ký tài khoản để đăng ký hiến máu, theo dõi lịch sử và nhận thông
            báo về các chiến dịch phù hợp với bạn.
          </p>
          <Button type="primary" size="large" onClick={() => navigate("/register")}>
            Đăng ký ngay
          </Button>
        </div>
      </section>
    </div>
  );
}
