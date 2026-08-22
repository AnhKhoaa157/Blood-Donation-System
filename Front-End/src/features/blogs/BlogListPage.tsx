import { useState } from "react";
import { Card, Col, Input, Pagination, Row, Skeleton, Tag } from "antd";
import { Link } from "react-router-dom";
import { useBlogs } from "./api";
import { resolveImageUrl } from "../../lib/config/env";
import { formatDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import EmptyState from "../../components/states/EmptyState";

function stripHtml(html: string, maxLength = 130): string {
  const text = html.replace(/<[^>]+>/g, "").trim();
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

interface BlogListPageProps {
  basePath: string;
}

export default function BlogListPage({ basePath }: BlogListPageProps) {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useBlogs({ page, keyword: keyword || undefined, size: 9 });
  const blogs = data?.content ?? [];

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px" }}>
      <PageHeader
        title="Bài viết"
        description="Kiến thức và câu chuyện về hiến máu."
        extra={
          <Input.Search
            placeholder="Tìm kiếm bài viết..."
            allowClear
            style={{ width: 260 }}
            onSearch={(v) => {
              setKeyword(v);
              setPage(1);
            }}
          />
        }
      />

      {isLoading ? (
        <Row gutter={[24, 24]}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col xs={24} md={12} lg={8} key={idx}>
              <Card><Skeleton active /></Card>
            </Col>
          ))}
        </Row>
      ) : blogs.length === 0 ? (
        <EmptyState title="Chưa có bài viết nào" />
      ) : (
        <>
          <Row gutter={[24, 24]}>
            {blogs.map((blog) => (
              <Col xs={24} md={12} lg={8} key={blog.id}>
                <Link to={`${basePath}/${blog.id}`}>
                  <Card
                    hoverable
                    style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", height: "100%" }}
                    styles={{ body: { padding: 18 } }}
                    cover={
                      <div style={{ height: 160, background: "var(--color-surface-alt)" }}>
                        {blog.anh && (
                          <img
                            src={resolveImageUrl(blog.anh)}
                            alt={blog.tieuDe}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        )}
                      </div>
                    }
                  >
                    {blog.danhMuc && <Tag color="purple" style={{ marginBottom: 8 }}>{blog.danhMuc.tieuDe}</Tag>}
                    <h3 style={{ margin: "0 0 8px", fontSize: 16, color: "var(--color-text-primary)" }}>{blog.tieuDe}</h3>
                    <p style={{ color: "var(--color-text-secondary)", fontSize: 13, minHeight: 40 }}>
                      {stripHtml(blog.noiDung)}
                    </p>
                    <div style={{ color: "var(--color-text-muted)", fontSize: 12 }}>{formatDate(blog.ngayTao)}</div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Pagination current={page} total={data?.totalElements ?? 0} pageSize={9} showSizeChanger={false} onChange={setPage} />
          </div>
        </>
      )}
    </div>
  );
}
