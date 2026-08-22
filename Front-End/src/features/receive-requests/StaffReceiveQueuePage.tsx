import { useState } from "react";
import { Select, Table } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useReceiveRequestsAdmin } from "./api";
import { receiveRequestStatusMap } from "../../lib/status/maps";
import { formatDateTime } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import ErrorState from "../../components/states/ErrorState";
import type { ReceiveRequest, ReceiveRequestStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: ReceiveRequestStatus | ""; label: string }[] = [
  { value: "", label: "Tất cả trạng thái" },
  { value: "dangcho", label: "Đang chờ" },
  { value: "dahoanthanh", label: "Đã hoàn thành" },
  { value: "huy", label: "Đã hủy" },
];

export default function StaffReceiveQueuePage() {
  const [status, setStatus] = useState<ReceiveRequestStatus | "">("dangcho");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useReceiveRequestsAdmin(page, status);

  if (isError) return <ErrorState onRetry={refetch} />;

  return (
    <div>
      <PageHeader
        title="Hàng chờ yêu cầu nhận máu"
        extra={<Select value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={STATUS_OPTIONS} style={{ width: 200 }} />}
      />
      <Table<ReceiveRequest>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        onRow={(record) => ({ onClick: () => navigate(`/employee/yeu-cau-nhan-mau/${record.id}`), style: { cursor: "pointer" } })}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Người nhận", dataIndex: "nguoiNhan", render: (v) => v?.ten },
          { title: "Ngày yêu cầu", dataIndex: "ngayTao", render: (v) => formatDateTime(v) },
          { title: "Ngày duyệt", dataIndex: "ngayDuyet", render: (v) => (v ? formatDateTime(v) : "Chưa duyệt") },
          {
            title: "Trạng thái",
            dataIndex: "trangThai",
            render: (v) => {
              const meta = receiveRequestStatusMap[v as ReceiveRequestStatus];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
          {
            title: "",
            width: 60,
            render: (_, record) => (
              <Link to={`/employee/yeu-cau-nhan-mau/${record.id}`} onClick={(e) => e.stopPropagation()}>
                <EyeOutlined />
              </Link>
            ),
          },
        ]}
      />
    </div>
  );
}
