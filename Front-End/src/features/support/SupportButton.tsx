import { useState } from "react";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import { useMutation } from "@tanstack/react-query";
import { createSupportTicketRequest, type SupportTicketPayload } from "../auth/api";
import { useFeedback } from "../../lib/feedback/useFeedback";
import { useAuth } from "../../lib/auth/AuthContext";

/** Floating support-request button, available across the donor portal and
 * the public site so a visitor never has to hunt for a contact form. */
export default function SupportButton() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<SupportTicketPayload>();
  const { message } = useFeedback();
  const { user } = useAuth();

  const mutation = useMutation({
    mutationFn: createSupportTicketRequest,
    onSuccess: () => {
      message.success("Gửi yêu cầu hỗ trợ thành công!");
      form.resetFields();
      setOpen(false);
    },
    onError: (error: Error) => {
      message.error(error.message || "Gửi yêu cầu hỗ trợ thất bại!");
    },
  });

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<CustomerServiceOutlined />}
        onClick={() => setOpen(true)}
        aria-label="Gửi yêu cầu hỗ trợ"
        style={{
          position: "fixed",
          right: 28,
          bottom: 28,
          zIndex: 1000,
          width: 56,
          height: 56,
          boxShadow: "var(--shadow-lg)",
        }}
      />
      <Modal
        open={open}
        title="Gửi yêu cầu hỗ trợ"
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        destroyOnClose
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => mutation.mutate(values)}
          initialValues={{ email: user?.email, hoten: user?.ten, sodienthoai: user?.soDienThoai }}
        >
          <Form.Item
            name="hoten"
            label="Họ tên"
            rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}
          >
            <Input placeholder="Họ và tên" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không hợp lệ" },
            ]}
          >
            <Input placeholder="Email liên hệ" />
          </Form.Item>
          <Form.Item
            name="sodienthoai"
            label="Số điện thoại"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            name="tieude"
            label="Tiêu đề"
            rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
          >
            <Input placeholder="Tiêu đề yêu cầu hỗ trợ" />
          </Form.Item>
          <Form.Item
            name="noidung"
            label="Nội dung"
            rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}
          >
            <Input.TextArea rows={4} placeholder="Mô tả nội dung cần hỗ trợ..." />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button type="primary" htmlType="submit" block loading={mutation.isPending}>
              Gửi yêu cầu
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
