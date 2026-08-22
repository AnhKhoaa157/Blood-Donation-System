import { Avatar, Col, Row, Tag } from "antd";
import { HeartOutlined, MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { useUsersNearMe } from "./api";
import { genderLabel } from "../../lib/status/maps";
import PageHeader from "../../components/PageHeader";
import LoadingBlock from "../../components/states/LoadingBlock";
import EmptyState from "../../components/states/EmptyState";
import ErrorState from "../../components/states/ErrorState";

export default function NearMePage() {
  const { data = [], isLoading, isError, refetch } = useUsersNearMe();

  return (
    <div>
      <PageHeader title="Người hiến máu gần bạn" description="Danh sách người hiến máu tình nguyện ở gần khu vực của bạn." />

      {isLoading ? (
        <LoadingBlock />
      ) : isError ? (
        <ErrorState onRetry={refetch} />
      ) : data.length === 0 ? (
        <EmptyState title="Không tìm thấy người dùng nào gần bạn" description="Hãy cập nhật địa chỉ trong hồ sơ để cải thiện kết quả." />
      ) : (
        <Row gutter={[16, 16]}>
          {data.map((user) => (
            <Col xs={24} sm={12} lg={8} key={user.id}>
              <div
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  height: "100%",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <Avatar size={48} icon={<UserOutlined />} />
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>{user.ten}</div>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                      {user.nhomMau && <Tag color="red">{user.nhomMau.ten}{user.yeuToRh}</Tag>}
                      {typeof user.distance === "number" && <Tag color="blue">Cách {user.distance.toFixed(1)} km</Tag>}
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: 14, color: "var(--color-text-secondary)", display: "grid", gap: 6 }}>
                  <span><MailOutlined /> {user.email}</span>
                  <span><PhoneOutlined /> {user.soDienThoai}</span>
                  {user.gioiTinh && <span><UserOutlined /> {genderLabel[user.gioiTinh] ?? user.gioiTinh}</span>}
                  {user.tienSuBenh && <span><HeartOutlined /> {user.tienSuBenh}</span>}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}
