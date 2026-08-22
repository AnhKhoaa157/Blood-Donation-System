import { useState } from "react";
import { Button, Descriptions, Table, Tabs, Tag } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useUserDetail, useUserDonationHistory, useUserReceiveRequests } from "./api";
import { accountStatusMap, donationRequestStatusMap, genderLabel, receiveRequestStatusMap } from "../../lib/status/maps";
import { formatDate, formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import type { DonationRequest, ReceiveRequest } from "../../lib/api/types";

export default function UserDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("info");
  const { data: user, isLoading, isError, refetch } = useUserDetail(id);
  const { data: history, isLoading: historyLoading } = useUserDonationHistory(id, activeTab === "history");
  const { data: receiveRequests, isLoading: receiveLoading } = useUserReceiveRequests(id, activeTab === "receive");

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !user) return <ErrorState onRetry={refetch} />;

  const statusMeta = accountStatusMap[String(user.trangThai) as "0" | "1" | "2"];

  return (
    <div>
      <PageHeader title={`Người dùng: ${user.ten}`} extra={<Button onClick={() => navigate(-1)}>Quay lại</Button>} />

      <Tabs
        activeKey={activeTab}
        onChange={setActiveTab}
        items={[
          {
            key: "info",
            label: "Thông tin",
            children: (
              <Descriptions bordered column={2} size="middle">
                <Descriptions.Item label="Họ tên">{user.ten}</Descriptions.Item>
                <Descriptions.Item label="Tên đăng nhập">{user.tenDangNhap}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{user.soDienThoai}</Descriptions.Item>
                <Descriptions.Item label="Ngày sinh">{formatDate(user.ngaySinh)}</Descriptions.Item>
                <Descriptions.Item label="Giới tính">{user.gioiTinh ? genderLabel[user.gioiTinh] : "Không rõ"}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ" span={2}>{user.diaChi || "—"}</Descriptions.Item>
                <Descriptions.Item label="Nhóm máu">{user.nhomMau?.ten ?? "—"}</Descriptions.Item>
                <Descriptions.Item label="Yếu tố Rh">{user.yeuToRh ?? "—"}</Descriptions.Item>
                <Descriptions.Item label="Chiều cao">{user.chieuCao ? `${user.chieuCao} cm` : "—"}</Descriptions.Item>
                <Descriptions.Item label="Cân nặng">{user.canNang ? `${user.canNang} kg` : "—"}</Descriptions.Item>
                <Descriptions.Item label="Tiền sử bệnh" span={2}>{user.tienSuBenh || "Không có"}</Descriptions.Item>
                <Descriptions.Item label="Vai trò">
                  <Tag color="blue">{user.vaiTro}</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Trạng thái">
                  <StatusTag label={statusMeta.label} tone={statusMeta.tone} />
                </Descriptions.Item>
                <Descriptions.Item label="Ngày tạo">{formatDateTime(user.ngayTao)}</Descriptions.Item>
                <Descriptions.Item label="Ngày cập nhật">{formatDateTime(user.ngayCapNhat)}</Descriptions.Item>
              </Descriptions>
            ),
          },
          {
            key: "history",
            label: "Lịch sử hiến máu",
            children: (
              <Table<DonationRequest>
                rowKey="id"
                dataSource={history?.content ?? []}
                loading={historyLoading}
                pagination={false}
                locale={{ emptyText: "Chưa có lịch sử hiến máu" }}
                scroll={{ x: true }}
                columns={[
                  { title: "Ngày đăng ký", dataIndex: "ngayTao", render: (v) => formatDate(v) },
                  { title: "Nhóm máu", dataIndex: "nguoiHien", render: (v) => v?.nhomMau?.ten ?? "—" },
                  { title: "Số lượng (ml)", dataIndex: "soLuong" },
                  {
                    title: "Trạng thái",
                    dataIndex: "trangThai",
                    render: (v) => {
                      const meta = donationRequestStatusMap[v as keyof typeof donationRequestStatusMap];
                      return <StatusTag label={meta.label} tone={meta.tone} />;
                    },
                  },
                  { title: "Người duyệt", dataIndex: "nguoiDuyet", render: (v) => v?.ten ?? "Chưa duyệt" },
                ]}
              />
            ),
          },
          {
            key: "receive",
            label: "Yêu cầu nhận máu",
            children: (
              <Table<ReceiveRequest>
                rowKey="id"
                dataSource={receiveRequests?.content ?? []}
                loading={receiveLoading}
                pagination={false}
                locale={{ emptyText: "Chưa có yêu cầu nhận máu" }}
                scroll={{ x: true }}
                columns={[
                  { title: "Ngày yêu cầu", dataIndex: "ngayTao", render: (v) => formatDate(v) },
                  { title: "Nhóm máu", dataIndex: "nhomMau", render: (v) => v?.ten ?? "—" },
                  { title: "Số lượng", dataIndex: "soLuongDonVi" },
                  {
                    title: "Trạng thái",
                    dataIndex: "trangThai",
                    render: (v) => {
                      const meta = receiveRequestStatusMap[v as keyof typeof receiveRequestStatusMap];
                      return <StatusTag label={meta.label} tone={meta.tone} />;
                    },
                  },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
