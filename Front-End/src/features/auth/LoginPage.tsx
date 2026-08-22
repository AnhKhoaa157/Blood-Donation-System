import { Button, Card, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import BrandMark from "../../components/BrandMark";
import { useAuth } from "../../lib/auth/AuthContext";
import { homePathForRole, normalizeRole } from "../../lib/auth/roles";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { LoginPayload } from "../../lib/api/types";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { message } = useFeedback();
  const [form] = Form.useForm<{ username: string; password: string }>();

  const mutation = useMutation({
    mutationFn: (values: { username: string; password: string }) => {
      const payload: LoginPayload = { tendangnhap: values.username, matkhau: values.password };
      return login(payload);
    },
    onSuccess: (user) => {
      message.success("Đăng nhập thành công!");
      const redirectTo = (location.state as { from?: string } | null)?.from;
      navigate(redirectTo ?? homePathForRole(normalizeRole(user.vaiTro)));
    },
    onError: (error: Error) => {
      message.error(error.message || "Tên đăng nhập hoặc mật khẩu không đúng!");
    },
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--color-surface-alt)",
        padding: 24,
      }}
    >
      <Card style={{ width: 420, borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Link to="/" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}>
            <BrandMark size={44} />
            <span style={{ fontWeight: 700, fontSize: 16, color: "var(--color-text-primary)" }}>
              Hiến Máu Cộng Đồng Việt
            </span>
          </Link>
        </div>

        <h1 style={{ fontSize: 20, textAlign: "center", marginBottom: 24, color: "var(--color-text-primary)" }}>
          Đăng nhập
        </h1>

        <Form form={form} layout="vertical" onFinish={(values) => mutation.mutate(values)}>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Nhập tên đăng nhập" size="large" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="••••••" size="large" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block size="large" loading={mutation.isPending}>
            Đăng nhập
          </Button>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16, color: "var(--color-text-secondary)" }}>
          Chưa có tài khoản? <Link to="/register">Đăng ký tại đây</Link>
        </div>
      </Card>
    </div>
  );
}
