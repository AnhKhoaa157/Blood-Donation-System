import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, DatePicker, Form, Input, Row, Select, Slider, Steps } from "antd";
import { useMutation } from "@tanstack/react-query";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { Link, useNavigate } from "react-router-dom";
import type { Dayjs } from "dayjs";
import { dayjs, toApiDate } from "../../lib/format/date";
import { registerRequest } from "./api";
import { useBloodTypes } from "../blood-types/api";
import { useFeedback } from "../../lib/feedback/useFeedback";
import BrandMark from "../../components/BrandMark";
import type { Gender, RegisterPayload, RhFactor } from "../../lib/api/types";

// Leaflet's default marker assets aren't bundled by Vite — point at the CDN copies.
delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

interface LatLng {
  lat: number;
  lng: number;
}

function LocationMarker({ value, onChange }: { value: LatLng; onChange: (lat: number, lng: number) => void }) {
  useMapEvents({
    click(e) {
      onChange(e.latlng.lat, e.latlng.lng);
    },
  });
  return <Marker position={[value.lat, value.lng]} />;
}

interface RegisterFormValues {
  tenDangNhap: string;
  matKhau: string;
  ten: string;
  email: string;
  soDienThoai: string;
  ngaySinh: Dayjs;
  gioiTinh: Gender;
  diaChi: string;
  nhomMau: number;
  rh: RhFactor;
  tienSuBenh?: string;
  canNang: number;
  chieuCao: number;
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const { message } = useFeedback();
  const [form] = Form.useForm<RegisterFormValues>();
  const { data: bloodTypes = [] } = useBloodTypes();
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<LatLng>({ lat: 21.028511, lng: 105.804817 });
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (step === 1) {
      setTimeout(() => mapRef.current?.invalidateSize(), 100);
    }
  }, [step]);

  const mutation = useMutation({
    mutationFn: registerRequest,
    onSuccess: () => {
      message.success("Đăng ký thành công! Vui lòng đăng nhập.");
      navigate("/login");
    },
    onError: (error: Error) => message.error(error.message || "Đăng ký thất bại!"),
  });

  const handleFinish = (values: RegisterFormValues) => {
    const payload: RegisterPayload = {
      ten: values.ten,
      tendangnhap: values.tenDangNhap,
      matkhau: values.matKhau,
      email: values.email,
      sodienthoai: values.soDienThoai,
      ngaysinh: toApiDate(values.ngaySinh) as string,
      gioitinh: values.gioiTinh,
      diachi: values.diaChi,
      nhommau: values.nhomMau,
      yeutorh: values.rh,
      tiensubenh: values.tienSuBenh || "Không có",
      cannang: Number(values.canNang),
      chieucao: Number(values.chieuCao),
      latitude: position.lat,
      longitude: position.lng,
    };
    mutation.mutate(payload);
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface-alt)", padding: "40px 24px", display: "flex", justifyContent: "center" }}>
      <Card style={{ width: 960, maxWidth: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <Link to="/" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 8, color: "inherit", textDecoration: "none" }}>
            <BrandMark size={40} />
            <span style={{ fontWeight: 700, color: "var(--color-text-primary)" }}>Hiến Máu Cộng Đồng Việt</span>
          </Link>
        </div>
        <h1 style={{ fontSize: 20, textAlign: "center", marginBottom: 24, color: "var(--color-text-primary)" }}>
          Đăng ký tài khoản người hiến máu
        </h1>

        <Steps
          current={step}
          style={{ marginBottom: 32 }}
          items={[{ title: "Tài khoản" }, { title: "Thông tin cá nhân" }, { title: "Thể trạng" }]}
        />

        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <div style={{ display: step === 0 ? "block" : "none" }}>
            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Form.Item label="Tên đăng nhập" name="tenDangNhap" rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập" }]}>
                  <Input placeholder="username" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Mật khẩu"
                  name="matKhau"
                  rules={[
                    { required: true, message: "Vui lòng nhập mật khẩu" },
                    { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự" },
                  ]}
                >
                  <Input.Password placeholder="••••••" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item
                  label="Xác nhận mật khẩu"
                  name="confirm"
                  dependencies={["matKhau"]}
                  rules={[
                    { required: true, message: "Vui lòng nhập lại mật khẩu" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("matKhau") === value) return Promise.resolve();
                        return Promise.reject(new Error("Mật khẩu không khớp!"));
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div style={{ display: step === 1 ? "block" : "none" }}>
            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Form.Item label="Họ tên" name="ten" rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}>
                  <Input placeholder="Nguyễn Văn A" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Vui lòng nhập email" },
                    { type: "email", message: "Email không hợp lệ" },
                  ]}
                >
                  <Input placeholder="email@example.com" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Số điện thoại" name="soDienThoai" rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}>
                  <Input placeholder="0123456789" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Ngày sinh" name="ngaySinh" rules={[{ required: true, message: "Vui lòng chọn ngày sinh" }]}>
                  <DatePicker style={{ width: "100%" }} format="DD/MM/YYYY" disabledDate={(d) => d && d > dayjs().endOf("day")} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Giới tính" name="gioiTinh" rules={[{ required: true, message: "Vui lòng chọn giới tính" }]}>
                  <Select
                    placeholder="Chọn giới tính"
                    options={[
                      { value: "nam", label: "Nam" },
                      { value: "nu", label: "Nữ" },
                      { value: "khac", label: "Khác" },
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Địa chỉ" name="diaChi" rules={[{ required: true, message: "Vui lòng nhập địa chỉ" }]}>
                  <Input placeholder="123 Lê Lợi, TP.HCM" />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Vị trí trên bản đồ" required>
                  <div style={{ height: 280, borderRadius: "var(--radius-md)", overflow: "hidden" }}>
                    <MapContainer
                      center={position}
                      zoom={13}
                      style={{ height: "100%", width: "100%" }}
                      ref={mapRef}
                      scrollWheelZoom
                    >
                      <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <LocationMarker value={position} onChange={(lat, lng) => setPosition({ lat, lng })} />
                    </MapContainer>
                  </div>
                  <div style={{ marginTop: 8, color: "var(--color-text-muted)", fontSize: 13 }}>
                    Toạ độ đã chọn: {position.lat.toFixed(6)}, {position.lng.toFixed(6)} — nhấp vào bản đồ để chọn lại vị trí.
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div style={{ display: step === 2 ? "block" : "none" }}>
            <Row gutter={24}>
              <Col xs={24} sm={12}>
                <Form.Item label="Nhóm máu" name="nhomMau" rules={[{ required: true, message: "Vui lòng chọn nhóm máu" }]}>
                  <Select
                    placeholder="Chọn nhóm máu"
                    showSearch
                    optionFilterProp="label"
                    options={bloodTypes.map((b) => ({ value: b.id, label: b.ten }))}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Yếu tố Rh" name="rh" rules={[{ required: true, message: "Vui lòng chọn yếu tố Rh" }]}>
                  <Select placeholder="Chọn Rh" options={[{ value: "+", label: "+" }, { value: "-", label: "-" }]} />
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="Tiền sử bệnh" name="tienSuBenh">
                  <Input.TextArea placeholder="Không có" autoSize={{ minRows: 2, maxRows: 4 }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Cân nặng (kg)" name="canNang" initialValue={50} rules={[{ required: true, message: "Vui lòng chọn cân nặng" }]}>
                  <Slider min={30} max={150} step={0.5} marks={{ 30: "30", 150: "150" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item label="Chiều cao (cm)" name="chieuCao" initialValue={160} rules={[{ required: true, message: "Vui lòng chọn chiều cao" }]}>
                  <Slider min={100} max={220} step={0.5} marks={{ 100: "100", 220: "220" }} />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24 }}>
            {step > 0 ? <Button onClick={() => setStep(step - 1)}>Quay lại</Button> : <span />}
            {step < 2 ? (
              <Button type="primary" onClick={() => form.validateFields().then(() => setStep(step + 1))}>
                Tiếp theo
              </Button>
            ) : (
              <Button type="primary" htmlType="submit" loading={mutation.isPending}>
                Đăng ký
              </Button>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: 16, color: "var(--color-text-secondary)" }}>
            Đã có tài khoản? <Link to="/login">Đăng nhập tại đây</Link>
          </div>
        </Form>
      </Card>
    </div>
  );
}
