import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import PageHeader from "../../components/PageHeader";

const { Title, Paragraph } = Typography;

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ marginBottom: 28 }}>
      <Title level={4} style={{ color: "var(--color-text-primary)" }}>{title}</Title>
      <Paragraph style={{ color: "var(--color-text-secondary)", lineHeight: 1.8 }}>{children}</Paragraph>
    </section>
  );
}

export function PrivacyPolicyPage() {
  return (
    <div className="app-container" style={{ padding: "40px 24px 64px", maxWidth: 840 }}>
      <PageHeader title="Chính sách bảo mật" />
      <LegalSection title="1. Thông tin thu thập">
        Hệ thống thu thập thông tin cá nhân bạn cung cấp khi đăng ký tài khoản,
        bao gồm họ tên, ngày sinh, giới tính, địa chỉ, số điện thoại, email và
        thông tin liên quan đến nhóm máu, tình trạng sức khỏe phục vụ cho hoạt
        động hiến máu và nhận máu.
      </LegalSection>
      <LegalSection title="2. Mục đích sử dụng">
        Thông tin được sử dụng để xác thực tài khoản, xử lý yêu cầu hiến máu và
        nhận máu, liên hệ khi cần thiết, và hỗ trợ các cơ sở y tế trong việc
        điều phối nguồn máu an toàn, kịp thời.
      </LegalSection>
      <LegalSection title="3. Bảo mật thông tin">
        Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý phù hợp để bảo vệ
        thông tin cá nhân khỏi truy cập, sử dụng hoặc tiết lộ trái phép. Thông
        tin sức khỏe nhạy cảm chỉ được truy cập bởi nhân viên y tế có thẩm quyền.
      </LegalSection>
      <LegalSection title="4. Quyền của người dùng">
        Bạn có quyền truy cập, chỉnh sửa thông tin cá nhân của mình trong phần
        hồ sơ tài khoản, và có thể liên hệ với chúng tôi để yêu cầu hỗ trợ liên
        quan đến dữ liệu cá nhân qua trang{" "}
        <Link to="/lien-he">Liên hệ</Link>.
      </LegalSection>
    </div>
  );
}

export function TermsPage() {
  return (
    <div className="app-container" style={{ padding: "40px 24px 64px", maxWidth: 840 }}>
      <PageHeader title="Điều khoản sử dụng" />
      <LegalSection title="1. Chấp nhận điều khoản">
        Khi tạo tài khoản và sử dụng hệ thống, bạn đồng ý tuân thủ các điều
        khoản sử dụng này cùng với chính sách bảo mật của chúng tôi.
      </LegalSection>
      <LegalSection title="2. Trách nhiệm người dùng">
        Bạn cam kết cung cấp thông tin chính xác, trung thực khi đăng ký hiến
        máu hoặc yêu cầu nhận máu, đặc biệt là các thông tin liên quan đến sức
        khỏe, nhằm đảm bảo an toàn cho bản thân và người nhận máu.
      </LegalSection>
      <LegalSection title="3. Quy trình y tế">
        Mọi hoạt động hiến máu, xét nghiệm và phân phối đơn vị máu đều được
        thực hiện bởi nhân viên y tế theo quy trình chuyên môn. Hệ thống chỉ hỗ
        trợ quản lý thông tin và điều phối, không thay thế chẩn đoán y khoa.
      </LegalSection>
      <LegalSection title="4. Thay đổi điều khoản">
        Chúng tôi có thể cập nhật điều khoản sử dụng theo thời gian. Phiên bản
        mới nhất luôn được đăng tải công khai tại trang này.
      </LegalSection>
    </div>
  );
}

export function SitemapPage() {
  const groups: { title: string; links: { to: string; label: string }[] }[] = [
    {
      title: "Trang công khai",
      links: [
        { to: "/", label: "Trang chủ" },
        { to: "/chien-dich", label: "Chiến dịch hiến máu" },
        { to: "/cam-nang-hien-mau", label: "Cẩm nang hiến máu" },
        { to: "/bai-viet", label: "Bài viết" },
        { to: "/lien-he", label: "Liên hệ" },
      ],
    },
    {
      title: "Tài khoản",
      links: [
        { to: "/login", label: "Đăng nhập" },
        { to: "/register", label: "Đăng ký" },
      ],
    },
    {
      title: "Pháp lý",
      links: [
        { to: "/chinh-sach-bao-mat", label: "Chính sách bảo mật" },
        { to: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng" },
        { to: "/so-do-trang-web", label: "Sơ đồ trang web" },
      ],
    },
  ];

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px", maxWidth: 840 }}>
      <PageHeader title="Sơ đồ trang web" />
      {groups.map((group) => (
        <section key={group.title} style={{ marginBottom: 24 }}>
          <Title level={4} style={{ color: "var(--color-text-primary)" }}>{group.title}</Title>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            {group.links.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
