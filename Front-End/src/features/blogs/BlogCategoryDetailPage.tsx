import { useState } from "react";
import { Button, Descriptions, Form, Input, Tag } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useBlogCategoryDetail, useUpdateBlogCategory } from "./api";
import { formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";

export default function BlogCategoryDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: category, isLoading, isError, refetch } = useBlogCategoryDetail(id);
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm<{ tieuDe: string; noidung?: string }>();
  const updateMutation = useUpdateBlogCategory(id as string);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !category) return <ErrorState onRetry={refetch} />;

  return (
    <div>
      <PageHeader title={`Danh mục: ${category.tieuDe}`} extra={<Button onClick={() => navigate(-1)}>Quay lại</Button>} />

      {!editMode ? (
        <>
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Tiêu đề">{category.tieuDe}</Descriptions.Item>
            <Descriptions.Item label="Nội dung">{category.noidung || <i>Không có</i>}</Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              <Tag color={category.trangThai === 1 ? "success" : "default"}>{category.trangThai === 1 ? "Kích hoạt" : "Ẩn"}</Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày tạo">{formatDateTime(category.ngayTao)}</Descriptions.Item>
            <Descriptions.Item label="Ngày cập nhật">{formatDateTime(category.ngayCapNhat)}</Descriptions.Item>
          </Descriptions>
          <div style={{ textAlign: "right", marginTop: 20 }}>
            <Button
              type="primary"
              onClick={() => {
                form.setFieldsValue({ tieuDe: category.tieuDe, noidung: category.noidung });
                setEditMode(true);
              }}
            >
              Chỉnh sửa
            </Button>
          </div>
        </>
      ) : (
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: 480 }}
          onFinish={async (values) => {
            try {
              await updateMutation.mutateAsync({ tieude: values.tieuDe, noidung: values.noidung });
              message.success("Cập nhật thành công");
              setEditMode(false);
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="tieuDe" label="Tiêu đề" rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="noidung" label="Nội dung">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Button type="primary" htmlType="submit" style={{ marginRight: 8 }} loading={updateMutation.isPending}>Lưu</Button>
          <Button onClick={() => setEditMode(false)}>Hủy</Button>
        </Form>
      )}
    </div>
  );
}
