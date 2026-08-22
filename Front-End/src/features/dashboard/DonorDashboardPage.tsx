import { Button, Col, Row, Skeleton, Tag } from "antd";
import { CalendarOutlined, EnvironmentOutlined, HeartOutlined, HistoryOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useAuth } from "../../lib/auth/AuthContext";
import { useCampaigns } from "../campaigns/api";
import { useMyDonationRequests } from "../donation-requests/api";
import { useUsersNearMe } from "../users/api";
import { donationComponentMap, donationRequestStatusMap } from "../../lib/status/maps";
import { formatDate, dayjs } from "../../lib/format/date";
import StatusTag from "../../components/StatusTag";
import EmptyState from "../../components/states/EmptyState";
import type { DonationComponent } from "../../lib/api/types";

const RECOVERY_WEEKS: Record<DonationComponent, number> = {
  toanphan: 12,
  hongcau: 16,
  tieucau: 2,
  huyettuong: 2,
};

export default function DonorDashboardPage() {
  const { user } = useAuth();
  const { data: upcoming, isLoading: campaignsLoading } = useCampaigns(1, "sapdienra");
  const { data: myRequests, isLoading: requestsLoading } = useMyDonationRequests(1, "");
  const { data: nearby = [], isLoading: nearbyLoading } = useUsersNearMe();

  const lastCompleted = myRequests?.content.find((r) => r.trangThai === "dahien");
  let eligibleFrom: string | null = null;
  if (lastCompleted) {
    const weeks = RECOVERY_WEEKS[lastCompleted.loaiHien] ?? 12;
    eligibleFrom = dayjs(lastCompleted.ngayHienMauDuKien).add(weeks, "week").format("DD/MM/YYYY");
  }
  const isEligibleNow = lastCompleted
    ? dayjs().isAfter(dayjs(lastCompleted.ngayHienMauDuKien).add(RECOVERY_WEEKS[lastCompleted.loaiHien] ?? 12, "week"))
    : true;

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div>
        <h1 style={{ fontSize: 22, color: "var(--color-text-primary)", margin: "0 0 4px" }}>
          Xin chào, {user?.ten ?? "bạn"} 👋
        </h1>
        <p style={{ color: "var(--color-text-secondary)", margin: 0 }}>
          Đây là tổng quan hoạt động hiến máu của bạn.
        </p>
      </div>

      <Row gutter={[20, 20]}>
        <Col xs={24} md={12}>
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 24, height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <HeartOutlined style={{ fontSize: 20, color: "var(--color-primary)" }} />
              <h3 style={{ margin: 0, color: "var(--color-text-primary)" }}>Tình trạng đủ điều kiện hiến máu</h3>
            </div>
            {isEligibleNow ? (
              <StatusTag label="Đủ điều kiện hiến máu ngay" tone="success" />
            ) : (
              <div>
                <StatusTag label={`Có thể hiến lại từ ${eligibleFrom}`} tone="warning" />
              </div>
            )}
            <p style={{ color: "var(--color-text-secondary)", fontSize: 14, marginTop: 12 }}>
              {lastCompleted
                ? `Lần hiến gần nhất: ${formatDate(lastCompleted.ngayHienMauDuKien)} — ${donationComponentMap[lastCompleted.loaiHien].label}`
                : "Bạn chưa có lượt hiến máu nào được ghi nhận."}
            </p>
            <Link to="/user/chien-dich">
              <Button type="primary" icon={<HeartOutlined />}>Đăng ký hiến máu</Button>
            </Link>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 24, height: "100%" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <TeamOutlined style={{ fontSize: 20, color: "var(--color-accent)" }} />
              <h3 style={{ margin: 0, color: "var(--color-text-primary)" }}>Người hiến gần bạn</h3>
            </div>
            {nearbyLoading ? (
              <Skeleton active paragraph={{ rows: 2 }} />
            ) : nearby.length === 0 ? (
              <EmptyState title="Chưa có dữ liệu" description="Cập nhật địa chỉ để xem người hiến gần bạn." />
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {nearby.slice(0, 3).map((n) => (
                  <div key={n.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
                    <span>{n.ten}</span>
                    <Tag color="blue">{n.nhomMau?.ten ?? "—"}</Tag>
                  </div>
                ))}
              </div>
            )}
            <Link to="/user/nguoi-hien-gan-ban">
              <Button style={{ marginTop: 12 }}>Xem tất cả</Button>
            </Link>
          </div>
        </Col>
      </Row>

      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <CalendarOutlined style={{ fontSize: 20, color: "var(--color-info)" }} />
            <h3 style={{ margin: 0, color: "var(--color-text-primary)" }}>Chiến dịch sắp diễn ra</h3>
          </div>
          <Link to="/user/chien-dich">Xem tất cả</Link>
        </div>
        {campaignsLoading ? (
          <Skeleton active paragraph={{ rows: 3 }} />
        ) : !upcoming || upcoming.content.length === 0 ? (
          <EmptyState title="Chưa có chiến dịch sắp diễn ra" />
        ) : (
          <Row gutter={[16, 16]}>
            {upcoming.content.slice(0, 3).map((c) => (
              <Col xs={24} md={8} key={c.id}>
                <Link
                  to={`/user/chien-dich/${c.id}`}
                  style={{ display: "block", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: 16, color: "inherit" }}
                >
                  <Tag color="blue"><EnvironmentOutlined /> {c.diaDiem}</Tag>
                  <div style={{ fontWeight: 700, marginTop: 8, color: "var(--color-text-primary)" }}>{c.ten}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 4 }}>
                    {formatDate(c.ngayBatDau)} – {formatDate(c.ngayKetThuc)}
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        )}
      </div>

      <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <HistoryOutlined style={{ fontSize: 20, color: "var(--color-primary)" }} />
            <h3 style={{ margin: 0, color: "var(--color-text-primary)" }}>Lịch sử đăng ký gần đây</h3>
          </div>
          <Link to="/user/lich-su-dang-ky">Xem tất cả</Link>
        </div>
        {requestsLoading ? (
          <Skeleton active paragraph={{ rows: 3 }} />
        ) : !myRequests || myRequests.content.length === 0 ? (
          <EmptyState title="Bạn chưa có yêu cầu hiến máu nào" />
        ) : (
          <div style={{ display: "grid", gap: 10 }}>
            {myRequests.content.slice(0, 4).map((r) => {
              const meta = donationRequestStatusMap[r.trangThai];
              return (
                <div key={r.id} style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "8px 0", borderBottom: "1px solid var(--color-border)" }}>
                  <span>{formatDate(r.ngayHienMauDuKien)} — {donationComponentMap[r.loaiHien].label}</span>
                  <StatusTag label={meta.label} tone={meta.tone} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
