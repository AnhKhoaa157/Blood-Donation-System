import { Button, Tag } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogDetail } from "./api";
import { resolveImageUrl } from "../../lib/config/env";
import { formatDateTime } from "../../lib/format/date";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";

export default function BlogDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blog, isLoading, isError, refetch } = useBlogDetail(id);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !blog) return <ErrorState onRetry={refetch} />;

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px", maxWidth: 800 }}>
      <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)} style={{ marginBottom: 20 }}>
        Quay lại
      </Button>

      {blog.anh && (
        <img
          src={resolveImageUrl(blog.anh)}
          alt={blog.tieuDe}
          style={{ width: "100%", maxHeight: 360, objectFit: "cover", borderRadius: "var(--radius-lg)", marginBottom: 24 }}
        />
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        {blog.danhMuc && <Tag color="purple">{blog.danhMuc.tieuDe}</Tag>}
        <span style={{ color: "var(--color-text-muted)", fontSize: 14 }}>{formatDateTime(blog.ngayTao)}</span>
      </div>

      <h1 style={{ fontSize: 30, color: "var(--color-text-primary)", margin: "0 0 20px" }}>{blog.tieuDe}</h1>

      <div
        style={{ fontSize: 16, lineHeight: 1.8, color: "var(--color-text-secondary)" }}
        dangerouslySetInnerHTML={{ __html: blog.noiDung }}
      />
    </div>
  );
}
