import { useState } from "react";
import { Button, Descriptions, Form, Image, Input, Select, Tag } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogCategories, useBlogDetail, useUpdateBlog } from "./api";
import { resolveImageUrl } from "../../lib/config/env";
import { formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import RichTextEditor from "../../components/RichTextEditor";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";

export default function BlogDetailManagerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: blog, isLoading, isError, refetch } = useBlogDetail(id);
  const { data: categories = [] } = useBlogCategories();
  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState("");
  const [form] = Form.useForm<{ tieude: string; danhmuc: number }>();
  const updateMutation = useUpdateBlog(id as string);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !blog) return <ErrorState onRetry={refetch} />;

  const startEdit = () => {
    form.setFieldsValue({ tieude: blog.tieuDe, danhmuc: blog.danhMuc?.id });
    setContent(blog.noiDung);
    setEditMode(true);
  };

  return (
    <div>
      <PageHeader title={`Bài viết: ${blog.tieuDe}`} extra={<Button onClick={() => navigate(-1)}>Quay lại</Button>} />

      {!editMode ? (
        <>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Tiêu đề">{blog.tieuDe}</Descriptions.Item>
            <Descriptions.Item label="Ảnh">
              {blog.anh ? <Image src={resolveImageUrl(blog.anh)} width={160} style={{ borderRadius: 8 }} /> : "-"}
            </Descriptions.Item>
            <Descriptions.Item label="Danh mục">{blog.danhMuc?.tieuDe ?? "-"}</Descriptions.Item>
            <Descriptions.Item label="Nội dung">
              <div dangerouslySetInnerHTML={{ __html: blog.noiDung }} />
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              <Tag color={blog.trangThai === 1 ? "success" : "default"}>{blog.trangThai === 1 ? "Kích hoạt" : "Ẩn"}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày tạo">{formatDateTime(blog.ngayTao)}</Descriptions.Item>
            <Descriptions.Item label="Ngày cập nhật">{formatDateTime(blog.ngayCapNhat)}</Descriptions.Item>
          </Descriptions>
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <Button type="primary" onClick={startEdit}>Chỉnh sửa</Button>
          </div>
        </>
      ) : (
        <Form
          layout="vertical"
          form={form}
          style={{ maxWidth: 720 }}
          onFinish={async (values) => {
            const formData = new FormData();
            formData.append("tieude", values.tieude);
            formData.append("noidung", content);
            formData.append("danhmuc", String(values.danhmuc));
            try {
              await updateMutation.mutateAsync(formData);
              message.success("Cập nhật thành công");
              setEditMode(false);
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="tieude" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nội dung" required>
            <RichTextEditor value={content} onChange={setContent} />
          </Form.Item>
          <Form.Item name="danhmuc" label="Danh mục" rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}>
            <Select options={categories.map((c) => ({ value: c.id, label: c.tieuDe }))} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }} loading={updateMutation.isPending}>Lưu</Button>
          <Button onClick={() => setEditMode(false)}>Hủy</Button>
        </Form>
      )}
    </div>
  );
}
