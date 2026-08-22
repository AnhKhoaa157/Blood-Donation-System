import type { ReactNode } from "react";
import { Descriptions, Tag } from "antd";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import { campaignStatusMap } from "../../lib/status/maps";
import { formatDate } from "../../lib/format/date";
import StatusTag from "../../components/StatusTag";
import type { Campaign } from "../../lib/api/types";

interface CampaignDetailViewProps {
  campaign: Campaign;
  action?: ReactNode;
}

export default function CampaignDetailView({ campaign, action }: CampaignDetailViewProps) {
  const meta = campaignStatusMap[campaign.trangThaiHoatDong];

  return (
    <div
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        padding: 28,
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
        <div>
          <StatusTag label={meta.label} tone={meta.tone} />
          <h1 style={{ fontSize: 24, margin: "12px 0 8px", color: "var(--color-text-primary)" }}>{campaign.ten}</h1>
          <Tag color="blue"><EnvironmentOutlined /> {campaign.diaDiem}</Tag>
        </div>
        {action}
      </div>

      <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginTop: 20 }}>
        {campaign.moTa || "Chưa có mô tả chi tiết cho chiến dịch này."}
      </p>

      <Descriptions bordered column={{ xs: 1, sm: 2 }} size="middle" style={{ marginTop: 20 }}>
        <Descriptions.Item label="Thời gian bắt đầu">{formatDate(campaign.ngayBatDau)}</Descriptions.Item>
        <Descriptions.Item label="Thời gian kết thúc">{formatDate(campaign.ngayKetThuc)}</Descriptions.Item>
        <Descriptions.Item label="Số người đăng ký">
          <TeamOutlined /> {campaign.soLuongNguoiDangKyHienTai}/{campaign.soLuongNguoiToiDa}
        </Descriptions.Item>
        {campaign.nguoiTao && (
          <Descriptions.Item label="Đơn vị tổ chức">
            {campaign.nguoiTao.ten} — {campaign.nguoiTao.soDienThoai}
          </Descriptions.Item>
        )}
      </Descriptions>
    </div>
  );
}
