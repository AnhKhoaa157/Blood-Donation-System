import { useState } from "react";
import { Select, Table, Tag } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDonationRequestsAdmin } from "./api";
import { donationComponentMap, donationRequestStatusMap } from "../../lib/status/maps";
import { formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import ErrorState from "../../components/states/ErrorState";
import type { DonationRequest, DonationRequestStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: DonationRequestStatus | ""; label: string }[] = [
  { value: "", label: "Tất cả trạng thái" },
  { value: "dangcho", label: "Đang chờ duyệt" },
  { value: "xacnhan", label: "Đã xác nhận" },
  { value: "dahien", label: "Đã hiến máu" },
  { value: "tuchoi", label: "Từ chối" },
  { value: "huy", label: "Đã hủy" },
];

export default function StaffDonationQueuePage() {
  const [status, setStatus] = useState<DonationRequestStatus | "">("dangcho");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useDonationRequestsAdmin(page, status);

  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <div>
      <PageHeader
        title="Hàng chờ yêu cầu hiến máu"
        extra={<Select value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={STATUS_OPTIONS} style={{ width: 200 }} />}
      />
      <Table<DonationRequest>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        onRow={(record) => ({ onClick: () => navigate(`/employee/yeu-cau-hien-mau/${record.id}`), style: { cursor: "pointer" } })}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Người hiến", dataIndex: "nguoiHien", render: (v) => v?.ten },
          { title: "Loại hiến", dataIndex: "loaiHien", render: (v) => <Tag color="blue">{donationComponentMap[v as keyof typeof donationComponentMap].label}</Tag> },
          { title: "Ngày hiến dự kiến", dataIndex: "ngayHienMauDuKien", render: (v) => formatDateTime(v) },
          {
            title: "Trạng thái",
            dataIndex: "trangThai",
            render: (v) => {
              const meta = donationRequestStatusMap[v as DonationRequestStatus];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
          {
            title: "",
            width: 60,
            render: (_, record) => (
              <Link to={`/employee/yeu-cau-hien-mau/${record.id}`} onClick={(e) => e.stopPropagation()}>
                <EyeOutlined />
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
}
