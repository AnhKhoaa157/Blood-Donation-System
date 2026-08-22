import { useState } from "react";
import { Button, Col, DatePicker, Form, Input, Modal, Row, Select, Table, Tag } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import type { Dayjs } from "dayjs";
import { Link } from "react-router-dom";
import { useCreateEmployee, useDeleteUser, useUsers } from "./api";
import { accountStatusMap, genderLabel } from "../../lib/status/maps";
import { toApiDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import ConfirmButton from "../../components/ConfirmButton";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { LegacyRole, UserAccount } from "../../lib/api/types";

const ROLE_OPTIONS: { value: LegacyRole; label: string }[] = [
  { value: "nguoidung", label: "Người dùng" },
  { value: "nhanvien", label: "Nhân viên" },
  { value: "admin", label: "Quản trị viên" },
];

interface EmployeeFormValues {
  ten: string;
  tenDangNhap: string;
  matKhau: string;
  email: string;
  soDienThoai: string;
  ngaySinh: Dayjs;
  gioiTinh: "nam" | "nu";
  diaChi: string;
  ngayVaoLam: Dayjs;
  maSoNhanVien: string;
  chucVu: string;
  phongBan: string;
  trangThaiLamViec: string;
}

export default function UserManagerPage() {
  const [role, setRole] = useState<LegacyRole>("nguoidung");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<EmployeeFormValues>();
  const { message } = useFeedback();

  const { data, isLoading } = useUsers(page, role);
  const deleteMutation = useDeleteUser();
  const createMutation = useCreateEmployee();

  return (
    <div>
      <PageHeader
        title="Người dùng & nhân viên"
        extra={
          <div style={{ display: "flex", gap: 12 }}>
            <Select value={role} onChange={(v) => { setRole(v); setPage(1); }} options={ROLE_OPTIONS} style={{ width: 180 }} />
            <Button type="primary" icon={<UserAddOutlined />} onClick={() => setOpen(true)}>Thêm nhân viên</Button>
          </div>
        }
      />

      <Table<UserAccount>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        scroll={{ x: true }}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Tên", dataIndex: "ten", render: (v, r) => <Link to={`/admin/nguoi-dung/${r.id}`}>{v || r.tenDangNhap}</Link> },
          { title: "Email", dataIndex: "email", render: (v) => v || <i>Chưa cập nhật</i> },
          { title: "Giới tính", dataIndex: "gioiTinh", render: (v) => (v ? genderLabel[v] : <i>Không rõ</i>) },
          { title: "Nhóm máu", dataIndex: "nhomMau", render: (v) => (v ? <Tag color="red">{v.ten}</Tag> : "—") },
          {
            title: "Trạng thái",
            dataIndex: "trangThai",
            render: (v) => {
              const meta = accountStatusMap[String(v) as "0" | "1" | "2"];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
          {
            title: "Hành động",
            render: (_, record) => (
              <ConfirmButton
                size="small"
                danger
                confirmTitle="Bạn chắc chắn muốn xóa người dùng này?"
                onConfirm={() => deleteMutation.mutate(record.id)}
              >
                Xóa
              </ConfirmButton>
            ),
          },
        ]}
      />

      <Modal title="Thêm nhân viên mới" open={open} onCancel={() => setOpen(false)} footer={null} width={720} destroyOnClose>
        <Form
          form={form}
          layout="vertical"
          initialValues={{ gioiTinh: "nam", trangThaiLamViec: "danglamviec" }}
          onFinish={async (values) => {
            try {
              await createMutation.mutateAsync({
                ten: values.ten,
                tendangnhap: values.tenDangNhap,
                matkhau: values.matKhau,
                email: values.email,
                sodienthoai: values.soDienThoai,
                ngaysinh: toApiDate(values.ngaySinh),
                gioitinh: values.gioiTinh,
                diachi: values.diaChi,
                ngayVaoLam: toApiDate(values.ngayVaoLam),
                maSoNhanVien: values.maSoNhanVien,
                chucVu: values.chucVu,
                phongBan: values.phongBan,
                trangThaiLamViec: values.trangThaiLamViec,
              });
              message.success("Tạo nhân viên thành công!");
              setOpen(false);
              form.resetFields();
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Row gutter={16}>
            <Col xs={24} sm={12}><Form.Item name="ten" label="Tên nhân viên" rules={[{ required: true, message: "Nhập tên nhân viên" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="tenDangNhap" label="Tên đăng nhập" rules={[{ required: true, message: "Nhập tên đăng nhập" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="matKhau" label="Mật khẩu" rules={[{ required: true, message: "Nhập mật khẩu" }]}><Input.Password /></Form.Item></Col>
            <Col xs={24} sm={12}>
              <Form.Item name="email" label="Email" rules={[{ required: true, message: "Nhập email" }, { type: "email", message: "Email không hợp lệ" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}><Form.Item name="soDienThoai" label="Số điện thoại" rules={[{ required: true, message: "Nhập số điện thoại" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="ngaySinh" label="Ngày sinh" rules={[{ required: true, message: "Chọn ngày sinh" }]}><DatePicker style={{ width: "100%" }} /></Form.Item></Col>
            <Col xs={24} sm={12}>
              <Form.Item name="gioiTinh" label="Giới tính" rules={[{ required: true, message: "Chọn giới tính" }]}>
                <Select options={[{ value: "nam", label: "Nam" }, { value: "nu", label: "Nữ" }]} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}><Form.Item name="diaChi" label="Địa chỉ" rules={[{ required: true, message: "Nhập địa chỉ" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="ngayVaoLam" label="Ngày vào làm" rules={[{ required: true, message: "Chọn ngày vào làm" }]}><DatePicker style={{ width: "100%" }} /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="maSoNhanVien" label="Mã số nhân viên" rules={[{ required: true, message: "Nhập mã số nhân viên" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="chucVu" label="Chức vụ" rules={[{ required: true, message: "Nhập chức vụ" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}><Form.Item name="phongBan" label="Phòng ban" rules={[{ required: true, message: "Nhập phòng ban" }]}><Input /></Form.Item></Col>
            <Col xs={24} sm={12}>
              <Form.Item name="trangThaiLamViec" label="Trạng thái làm việc" rules={[{ required: true, message: "Chọn trạng thái làm việc" }]}>
                <Select
                  options={[
                    { value: "danglamviec", label: "Đang làm việc" },
                    { value: "nghiviec", label: "Nghỉ việc" },
                    { value: "tamnghi", label: "Tạm nghỉ" },
                  ]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" loading={createMutation.isPending}>Thêm mới</Button>
        </Form>
      </Modal>
    </div>
  );
}
