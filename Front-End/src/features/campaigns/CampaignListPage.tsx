import { useState } from "react";
import { Pagination, Segmented, Tag } from "antd";
import { EnvironmentOutlined, TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useCampaigns } from "./api";
import { campaignStatusMap } from "../../lib/status/maps";
import { formatDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import LoadingBlock from "../../components/states/LoadingBlock";
import EmptyState from "../../components/states/EmptyState";
import ErrorState from "../../components/states/ErrorState";
import StatusTag from "../../components/StatusTag";
import type { CampaignStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { label: string; value: CampaignStatus | "" }[] = [
  { label: "Tất cả", value: "" },
  { label: "Sắp diễn ra", value: "sapdienra" },
  { label: "Đang diễn ra", value: "dangdienra" },
  { label: "Đã kết thúc", value: "daketthuc" },
];

interface CampaignListPageProps {
  basePath?: string;
}

export default function CampaignListPage({ basePath = "/chien-dich" }: CampaignListPageProps) {
  const [status, setStatus] = useState<CampaignStatus | "">("sapdienra");
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, refetch } = useCampaigns(page, status);

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px" }}>
      <PageHeader
        title="Chiến dịch hiến máu"
        description="Chọn một chiến dịch phù hợp với thời gian và khu vực của bạn."
      />

      <Segmented
        options={STATUS_OPTIONS.map((o) => ({ label: o.label, value: o.value }))}
        value={status}
        onChange={(v) => {
          setStatus(v as CampaignStatus | "");
          setPage(1);
        }}
        style={{ marginBottom: 24 }}
      />

      {isLoading ? (
        <LoadingBlock />
      ) : isError ? (
        <ErrorState onRetry={refetch} />
      ) : !data || data.content.length === 0 ? (
        <EmptyState title="Không có chiến dịch nào" description="Hãy thử một trạng thái khác." />
      ) : (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {data.content.map((c) => {
              const meta = campaignStatusMap[c.trangThaiHoatDong];
              return (
                <Link
                  key={c.id}
                  to={`${basePath}/${c.id}`}
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
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <Tag color="blue">
                      <EnvironmentOutlined /> {c.diaDiem}
                    </Tag>
                    <StatusTag label={meta.label} tone={meta.tone} />
                  </div>
                  <h3 style={{ margin: "0 0 8px", fontSize: 17, color: "var(--color-text-primary)" }}>{c.ten}</h3>
                  <p
                    style={{
                      color: "var(--color-text-secondary)",
                      fontSize: 14,
                      minHeight: 42,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {c.moTa}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--color-text-muted)" }}>
                    <span>{formatDate(c.ngayBatDau)} – {formatDate(c.ngayKetThuc)}</span>
                    <span><TeamOutlined /> {c.soLuongNguoiDangKyHienTai}/{c.soLuongNguoiToiDa}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Pagination
              current={page}
              total={data.totalElements}
              pageSize={data.size || 10}
              showSizeChanger={false}
              onChange={setPage}
            />
          </div>
        </>
      )}
    </div>
  );
}
