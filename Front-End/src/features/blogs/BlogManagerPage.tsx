import { useState } from "react";
import { Button, Form, Image, Input, Modal, Select, Table, Tabs, Upload } from "antd";
import type { UploadFile } from "antd";
import { EyeOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useBlogCategories, useBlogs, useCreateBlog, useCreateBlogCategory, useDeleteBlog } from "./api";
import { resolveImageUrl } from "../../lib/config/env";
import PageHeader from "../../components/PageHeader";
import ConfirmButton from "../../components/ConfirmButton";
import RichTextEditor from "../../components/RichTextEditor";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { Blog, BlogCategory } from "../../lib/api/types";

function BlogCategoriesTab({ basePath }: { basePath: string }) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<{ tieude: string; noidung?: string }>();
  const { message } = useFeedback();
  const { data: categories = [], isLoading } = useBlogCategories();
  const createMutation = useCreateBlogCategory();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Thêm danh mục</Button>
      </div>
      <Table<BlogCategory>
        rowKey="id"
        loading={isLoading}
        dataSource={categories}
        pagination={false}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Tiêu đề", dataIndex: "tieuDe", render: (v, r) => <Link to={`${basePath}/danh-muc/${r.id}`}>{v}</Link> },
          { title: "Nội dung", dataIndex: "noidung", render: (v) => v || <i>Không có</i> },
        ]}
      />
      <Modal title="Thêm danh mục blog" open={open} onCancel={() => setOpen(false)} footer={null} destroyOnClose>
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            try {
              await createMutation.mutateAsync(values);
              message.success("Tạo danh mục thành công!");
              setOpen(false);
              form.resetFields();
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="tieude" label="Tiêu đề" rules={[{ required: true, message: "Nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="noidung" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending}>Thêm</Button>
        </Form>
      </Modal>
    </div>
  );
}

interface BlogFormValues {
  tieuDe: string;
  danhmuc: number;
  anh: UploadFile[];
}

function BlogsTab({ basePath }: { basePath: string }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [form] = Form.useForm<BlogFormValues>();
  const { message } = useFeedback();
  const { data, isLoading } = useBlogs({ size: 50 });
  const { data: categories = [] } = useBlogCategories();
  const createMutation = useCreateBlog();
  const deleteMutation = useDeleteBlog();

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Thêm bài viết</Button>
      </div>
      <Table<Blog>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ pageSize: 10 }}
        scroll={{ x: true }}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Tiêu đề", dataIndex: "tieuDe", render: (v, r) => <Link to={`${basePath}/${r.id}`}>{v}</Link> },
          { title: "Danh mục", dataIndex: "danhMuc", render: (v) => v?.tieuDe ?? <i>Không có</i> },
          { title: "Ảnh", dataIndex: "anh", render: (v) => (v ? <Image src={resolveImageUrl(v)} width={64} style={{ borderRadius: 8 }} preview={false} /> : "-") },
          {
            title: "Thao tác",
            render: (_, record) => (
              <div style={{ display: "flex", gap: 8 }}>
                <Link to={`${basePath}/${record.id}`}><Button icon={<EyeOutlined />} size="small" /></Link>
                <ConfirmButton
                  size="small"
                  danger
                  confirmTitle="Xóa bài viết này?"
                  onConfirm={() => deleteMutation.mutate(record.id)}
                >
                  Xóa
                </ConfirmButton>
              </div>
            ),
          },
        ]}
      />

      <Modal title="Thêm bài viết mới" open={open} onCancel={() => setOpen(false)} footer={null} width={800} destroyOnClose>
        <Form
          layout="vertical"
          form={form}
          onFinish={async (values) => {
            if (!content) return message.error("Vui lòng nhập nội dung");
            const formData = new FormData();
            formData.append("tieude", values.tieuDe);
            formData.append("noidung", content);
            formData.append("danhmuc", String(values.danhmuc));
            const file = values.anh?.[0]?.originFileObj;
            if (file) formData.append("anh", file);
            try {
              await createMutation.mutateAsync(formData);
              message.success("Tạo bài viết thành công!");
              setOpen(false);
              form.resetFields();
              setContent("");
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="tieuDe" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input placeholder="Nhập tiêu đề bài viết" />
          </Form.Item>
          <Form.Item label="Nội dung" required>
            <RichTextEditor value={content} onChange={setContent} />
          </Form.Item>
          <Form.Item
            name="anh"
            label="Ảnh đại diện"
            valuePropName="fileList"
            getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            rules={[{ required: true, message: "Vui lòng chọn ảnh" }]}
          >
            <Upload beforeUpload={() => false} maxCount={1} listType="picture">
              <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
            </Upload>
          </Form.Item>
          <Form.Item name="danhmuc" label="Danh mục" rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}>
            <Select options={categories.map((c) => ({ value: c.id, label: c.tieuDe }))} />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending}>Thêm</Button>
        </Form>
      </Modal>
    </div>
  );
}

export default function BlogManagerPage({ basePath }: { basePath: string }) {
  return (
    <div>
      <PageHeader title="Quản lý bài viết" />
      <Tabs
        defaultActiveKey="blogs"
        items={[
          { key: "blogs", label: "Danh sách bài viết", children: <BlogsTab basePath={basePath} /> },
          { key: "categories", label: "Danh mục bài viết", children: <BlogCategoriesTab basePath={basePath} /> },
        ]}
      />
    </div>
  );
}
