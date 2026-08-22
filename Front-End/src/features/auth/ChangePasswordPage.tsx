import { Button, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import { changePasswordRequest, type ChangePasswordPayload } from "./api";
import { useFeedback } from "../../lib/feedback/useFeedback";
import PageHeader from "../../components/PageHeader";

export default function ChangePasswordPage() {
  const [form] = Form.useForm<ChangePasswordPayload>();
  const { message } = useFeedback();

  const mutation = useMutation({
    mutationFn: changePasswordRequest,
    onSuccess: () => {
      message.success("Đổi mật khẩu thành công!");
      form.resetFields();
    },
    onError: (error: Error) => message.error(error.message || "Đổi mật khẩu thất bại!"),
  });

  const handleFinish = (values: ChangePasswordPayload) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error("Mật khẩu xác nhận không khớp!");
      return;
    }
    mutation.mutate(values);
  };

  return (
    <div style={{ maxWidth: 480 }}>
      <PageHeader title="Đổi mật khẩu" />
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Mật khẩu cũ" name="oldPassword" rules={[{ required: true, message: "Vui lòng nhập mật khẩu cũ" }]}>
          <Input.Password placeholder="Nhập mật khẩu cũ" />
        </Form.Item>
        <Form.Item label="Mật khẩu mới" name="newPassword" rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới" }, { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" }]}>
          <Input.Password placeholder="Nhập mật khẩu mới" />
        </Form.Item>
        <Form.Item label="Xác nhận mật khẩu mới" name="confirmPassword" rules={[{ required: true, message: "Vui lòng xác nhận mật khẩu mới" }]}>
          <Input.Password placeholder="Nhập lại mật khẩu mới" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Đổi mật khẩu
        </Button>
      </Form>
    </div>
  );
}
