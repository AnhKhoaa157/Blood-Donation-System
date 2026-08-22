import { Button, Descriptions, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth/AuthContext";
import { accountStatusMap, genderLabel } from "../../lib/status/maps";
import { formatDate, formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  if (!user) return null;

  const statusMeta = accountStatusMap[String(user.trangThai) as "0" | "1" | "2"];

  return (
    <div>
      <PageHeader
        title="Thông tin cá nhân"
        extra={
          <div style={{ display: "flex", gap: 8 }}>
            <Button type="primary" onClick={() => navigate("/user/ho-so/chinh-sua")}>Chỉnh sửa</Button>
            <Button onClick={() => navigate("/user/doi-mat-khau")}>Đổi mật khẩu</Button>
          </div>
        }
      />

      <Descriptions bordered column={{ xs: 1, sm: 2 }} size="middle">
        <Descriptions.Item label="Họ tên">{user.ten}</Descriptions.Item>
        <Descriptions.Item label="Tên đăng nhập">{user.tenDangNhap}</Descriptions.Item>
        <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
        <Descriptions.Item label="Số điện thoại">{user.soDienThoai}</Descriptions.Item>
        <Descriptions.Item label="Ngày sinh">{formatDate(user.ngaySinh)}</Descriptions.Item>
        <Descriptions.Item label="Giới tính">{user.gioiTinh ? genderLabel[user.gioiTinh] : "—"}</Descriptions.Item>
        <Descriptions.Item label="Địa chỉ" span={2}>{user.diaChi}</Descriptions.Item>
        <Descriptions.Item label="Nhóm máu">
          {user.nhomMau ? <Tag color="red">{user.nhomMau.ten}{user.yeuToRh}</Tag> : "—"}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái tài khoản">
          <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
        </Descriptions.Item>
        <Descriptions.Item label="Chiều cao">{user.chieuCao ? `${user.chieuCao} cm` : "—"}</Descriptions.Item>
        <Descriptions.Item label="Cân nặng">{user.canNang ? `${user.canNang} kg` : "—"}</Descriptions.Item>
        <Descriptions.Item label="Tiền sử bệnh" span={2}>{user.tienSuBenh || "Không có"}</Descriptions.Item>
        <Descriptions.Item label="Ngày tạo tài khoản">{formatDateTime(user.ngayTao)}</Descriptions.Item>
        <Descriptions.Item label="Cập nhật gần nhất">{formatDateTime(user.ngayCapNhat)}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}
