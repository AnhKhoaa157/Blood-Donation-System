import React from "react";
import { Form, Input, Button, message, Card, Typography } from "antd";
import { changePassword } from "../../services/userService";

const { Title } = Typography;

export default function ChangePassword() {
  const onFinish = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      return message.error("Mật khẩu xác nhận không khớp!");
    }

    try {
      await changePassword(values);
      message.success("Đổi mật khẩu thành công!");
    } catch (err) {
      message.error(err?.message || "Đổi mật khẩu thất bại!");
    }
  };

  return (
    <Card
      style={{
        maxWidth: 600,
        margin: "40px auto",
        borderRadius: 24,
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        background: "linear-gradient(145deg, #f0f0f0, #f5f9ff)",
        padding: 24,
      }}
    >
      <Title level={3} style={{ color: "#1976d2", textAlign: "center" }}>
        🔒 Đổi mật khẩu
      </Title>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={<span style={{ color: "#1976d2" }}>Mật khẩu cũ</span>}
          name="oldPassword"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu cũ!" }]}
        >
          <Input.Password
            placeholder="Nhập mật khẩu cũ"
            style={{
              borderRadius: 30,
              height: 42,
              paddingLeft: 20,
              backgroundColor: "#fefefe",
              border: "1px solid #bbdefb",
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "#1976d2" }}>Mật khẩu mới</span>}
          name="newPassword"
          rules={[{ required: true, message: "Nhập mật khẩu mới!" }]}
        >
          <Input.Password
            placeholder="Nhập mật khẩu mới"
            style={{
              borderRadius: 30,
              height: 42,
              paddingLeft: 20,
              backgroundColor: "#fefefe",
              border: "1px solid #bbdefb",
            }}
          />
        </Form.Item>

        <Form.Item
          label={<span style={{ color: "#1976d2" }}>Xác nhận mật khẩu</span>}
          name="confirmPassword"
          rules={[{ required: true, message: "Xác nhận lại mật khẩu!" }]}
        >
          <Input.Password
            placeholder="Nhập lại mật khẩu mới"
            style={{
              borderRadius: 30,
              height: 42,
              paddingLeft: 20,
              backgroundColor: "#fefefe",
              border: "1px solid #bbdefb",
            }}
          />
        </Form.Item>

        <Form.Item style={{ textAlign: "right" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              borderRadius: 30,
              height: 42,
              minWidth: 160,
              background: "#1976d2",
              borderColor: "#1976d2",
              fontWeight: "bold",
            }}
          >
            Đổi mật khẩu
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
