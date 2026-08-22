import { Button, Card, Col, Form, Input, Row } from "antd";
import { ClockCircleOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, SendOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { createSupportTicketRequest, type SupportTicketPayload } from "../auth/api";
import { useFeedback } from "../../lib/feedback/useFeedback";
import PageHeader from "../../components/PageHeader";

const CONTACT_INFO = [
  { icon: <PhoneOutlined />, label: "Hotline", value: "1900 1234" },
  { icon: <MailOutlined />, label: "Email", value: "support@hienmau.vn" },
  { icon: <EnvironmentOutlined />, label: "Địa chỉ", value: "FPT University, Hà Nội" },
  { icon: <ClockCircleOutlined />, label: "Giờ làm việc", value: "8:00 – 18:00, tất cả các ngày trong tuần" },
];

export default function ContactPage() {
  const [form] = Form.useForm<SupportTicketPayload>();
  const { message } = useFeedback();

  const mutation = useMutation({
    mutationFn: createSupportTicketRequest,
    onSuccess: () => {
      message.success("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
      form.resetFields();
    },
    onError: (error: Error) => message.error(error.message),
  });

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px" }}>
      <PageHeader title="Liên hệ" description="Chúng tôi luôn sẵn sàng hỗ trợ bạn." />

      <Row gutter={[32, 32]}>
        <Col xs={24} lg={14}>
          <Card title="Gửi yêu cầu hỗ trợ">
            <Form form={form} layout="vertical" onFinish={(values) => mutation.mutate(values)}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="hoten" label="Họ và tên" rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}>
                    <Input placeholder="Nhập họ và tên của bạn" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: "Vui lòng nhập email" },
                      { type: "email", message: "Email không hợp lệ" },
                    ]}
                  >
                    <Input placeholder="Nhập email của bạn" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="sodienthoai" label="Số điện thoại" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
                    <Input placeholder="Nhập số điện thoại" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="tieude" label="Chủ đề" rules={[{ required: true, message: "Vui lòng nhập chủ đề" }]}>
                    <Input placeholder="Chủ đề tin nhắn" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="noidung" label="Nội dung" rules={[{ required: true, message: "Vui lòng nhập nội dung" }]}>
                <Input.TextArea rows={5} placeholder="Nhập nội dung tin nhắn của bạn..." />
              </Form.Item>
              <Button type="primary" htmlType="submit" icon={<SendOutlined />} loading={mutation.isPending}>
                Gửi tin nhắn
              </Button>
            </Form>
          </Card>
        </Col>

        <Col xs={24} lg={10}>
          <Card title="Thông tin liên hệ">
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CONTACT_INFO.map((info) => (
                <div key={info.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "var(--radius-md)",
                      background: "var(--color-primary-bg)",
                      color: "var(--color-primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, color: "var(--color-text-muted)" }}>{info.label}</div>
                    <div style={{ fontWeight: 600, color: "var(--color-text-primary)" }}>{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
