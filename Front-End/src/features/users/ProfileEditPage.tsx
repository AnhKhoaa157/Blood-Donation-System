import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from "antd";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import type { Dayjs } from "dayjs";
import { useAuth } from "../../lib/auth/AuthContext";
import { updateProfileRequest } from "../auth/api";
import { useBloodTypes } from "../blood-types/api";
import { dayjs, toApiDate } from "../../lib/format/date";
import { useFeedback } from "../../lib/feedback/useFeedback";
import PageHeader from "../../components/PageHeader";
import type { Gender, RhFactor } from "../../lib/api/types";

interface ProfileEditFormValues {
  ten: string;
  tendangnhap: string;
  email: string;
  sodienthoai?: string;
  ngaysinh?: Dayjs;
  gioitinh?: Gender;
  diachi?: string;
  nhommau?: number;
  yeutorh?: RhFactor;
  tiensubenh?: string;
  cannang?: number;
  chieucao?: number;
}

export default function ProfileEditPage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { data: bloodTypes = [] } = useBloodTypes();
  const { message } = useFeedback();
  const [form] = Form.useForm<ProfileEditFormValues>();

  const mutation = useMutation({
    mutationFn: (values: ProfileEditFormValues) =>
      updateProfileRequest({ ...values, ngaysinh: toApiDate(values.ngaysinh) }),
    onSuccess: (updated) => {
      setUser(updated);
      message.success("Cập nhật hồ sơ thành công!");
      navigate("/user/ho-so");
    },
    onError: (error: Error) => message.error(error.message || "Cập nhật thất bại!"),
  });

  if (!user) return null;

  return (
    <div>
      <PageHeader title="Chỉnh sửa hồ sơ" />
      <Form
        form={form}
        layout="vertical"
        onFinish={(values) => mutation.mutate(values)}
        initialValues={{
          ten: user.ten,
          tendangnhap: user.tenDangNhap,
          email: user.email,
          sodienthoai: user.soDienThoai,
          ngaysinh: user.ngaySinh ? dayjs(user.ngaySinh) : undefined,
          gioitinh: user.gioiTinh,
          diachi: user.diaChi,
          nhommau: user.nhomMau?.id,
          yeutorh: user.yeuToRh,
          tiensubenh: user.tienSuBenh,
          cannang: user.canNang,
          chieucao: user.chieuCao,
        }}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Họ tên" name="ten" rules={[{ required: true, message: "Vui lòng nhập họ tên" }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Tên đăng nhập" name="tendangnhap">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Email" name="email">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Số điện thoại" name="sodienthoai">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Ngày sinh" name="ngaysinh">
              <DatePicker style={{ width: "100%" }} disabledDate={(d) => d && d > dayjs().endOf("day")} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Giới tính" name="gioitinh">
              <Select options={[{ value: "nam", label: "Nam" }, { value: "nu", label: "Nữ" }, { value: "khac", label: "Khác" }]} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Địa chỉ" name="diachi">
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Nhóm máu" name="nhommau">
              <Select disabled options={bloodTypes.map((b) => ({ value: b.id, label: b.ten }))} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Yếu tố Rh" name="yeutorh">
              <Select disabled options={[{ value: "+", label: "Rh+" }, { value: "-", label: "Rh-" }]} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Cân nặng (kg)" name="cannang">
              <InputNumber min={30} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Chiều cao (cm)" name="chieucao">
              <InputNumber min={100} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Tiền sử bệnh" name="tiensubenh">
              <Input.TextArea rows={2} />
            </Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit" loading={mutation.isPending}>
          Lưu thay đổi
        </Button>
      </Form>
    </div>
  );
}
