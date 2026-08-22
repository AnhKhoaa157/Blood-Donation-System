import { useState } from "react";
import { Button, DatePicker, Form, Input, Modal, Select, Table, Tag } from "antd";
import { useCancelBloodUnit, useBloodUnits, useMarkBloodUnitTested } from "./api";
import { bloodUnitStatusMap } from "../../lib/status/maps";
import { formatDate } from "../../lib/format/date";
import PageHeader from "../../components/PageHeader";
import StatusTag from "../../components/StatusTag";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { BloodUnit, BloodUnitStatus } from "../../lib/api/types";

const STATUS_OPTIONS: { value: BloodUnitStatus | ""; label: string }[] = [
  { value: "", label: "Tất cả trạng thái" },
  { value: "choxetnghiem", label: "Chờ xét nghiệm" },
  { value: "sansang", label: "Sẵn sàng sử dụng" },
  { value: "dasudung", label: "Đã sử dụng" },
  { value: "huybo", label: "Đã hủy bỏ" },
];

interface TestFormValues {
  ketQuaXetNghiem: string;
  ngayHetHan: import("dayjs").Dayjs;
}

interface CancelFormValues {
  ghiChu: string;
}

export default function BloodUnitsPage() {
  const [status, setStatus] = useState<BloodUnitStatus | "">("choxetnghiem");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState<{ type: "cancel" | "test"; unit: BloodUnit } | null>(null);
  const [cancelForm] = Form.useForm<CancelFormValues>();
  const [testForm] = Form.useForm<TestFormValues>();
  const { message } = useFeedback();

  const { data, isLoading } = useBloodUnits(page, status);
  const cancelMutation = useCancelBloodUnit();
  const testMutation = useMarkBloodUnitTested();

  const closeModal = () => {
    setModal(null);
    cancelForm.resetFields();
    testForm.resetFields();
  };

  return (
    <div>
      <PageHeader
        title="Kho đơn vị máu"
        description="Theo dõi trạng thái xét nghiệm, hạn sử dụng và sẵn sàng của từng đơn vị máu."
        extra={<Select value={status} onChange={(v) => { setStatus(v); setPage(1); }} options={STATUS_OPTIONS} style={{ width: 200 }} />}
      />

      <Table<BloodUnit>
        rowKey="id"
        loading={isLoading}
        dataSource={data?.content ?? []}
        pagination={{ current: page, total: data?.totalElements ?? 0, pageSize: 10, onChange: setPage, showSizeChanger: false }}
        scroll={{ x: true }}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          { title: "Nhóm máu", dataIndex: "nhomMau", render: (v) => <Tag color="red">{v?.ten}</Tag> },
          { title: "Ngày lấy máu", dataIndex: "ngayLayMau", render: (v) => formatDate(v) },
          { title: "Ngày hết hạn", dataIndex: "ngayHetHan", render: (v) => formatDate(v) },
          { title: "Số lượng", dataIndex: "soLuong", render: (v) => `${v} ml` },
          {
            title: "Trạng thái",
            dataIndex: "trangThai",
            render: (v) => {
              const meta = bloodUnitStatusMap[v as BloodUnitStatus];
              return <StatusTag label={meta.label} tone={meta.tone} />;
            },
          },
          {
            title: "Hành động",
            render: (_, record) =>
              record.trangThai === "choxetnghiem" ? (
                <div style={{ display: "flex", gap: 8 }}>
                  <Button size="small" danger onClick={() => setModal({ type: "cancel", unit: record })}>Hủy</Button>
                  <Button size="small" type="primary" onClick={() => setModal({ type: "test", unit: record })}>Xét nghiệm</Button>
                </div>
              ) : null,
          },
        ]}
      />

      <Modal
        title={modal?.type === "cancel" ? "Hủy đơn vị máu" : "Ghi nhận kết quả xét nghiệm"}
        open={Boolean(modal)}
        onCancel={closeModal}
        footer={null}
        destroyOnClose
      >
        {modal?.type === "cancel" ? (
          <Form
            form={cancelForm}
            layout="vertical"
            onFinish={async (values) => {
              try {
                await cancelMutation.mutateAsync({ id: modal.unit.id, ghiChu: values.ghiChu });
                message.success("Đơn vị máu đã bị hủy.");
                closeModal();
              } catch (error) {
                message.error((error as Error).message);
              }
            }}
          >
            <Form.Item name="ghiChu" label="Ghi chú" rules={[{ required: true, message: "Vui lòng nhập ghi chú" }]}>
              <Input.TextArea rows={3} placeholder="Lý do hủy đơn vị máu" />
            </Form.Item>
            <Button type="primary" danger htmlType="submit" block loading={cancelMutation.isPending}>Xác nhận hủy</Button>
          </Form>
        ) : modal?.type === "test" ? (
          <Form
            form={testForm}
            layout="vertical"
            onFinish={async (values) => {
              try {
                await testMutation.mutateAsync({
                  id: modal.unit.id,
                  payload: { ketQuaXetNghiem: values.ketQuaXetNghiem, ngayHetHan: values.ngayHetHan.format("YYYY-MM-DDTHH:mm:ss") },
                });
                message.success("Đã ghi nhận kết quả xét nghiệm.");
                closeModal();
              } catch (error) {
                message.error((error as Error).message);
              }
            }}
          >
            <Form.Item name="ketQuaXetNghiem" label="Kết quả xét nghiệm" rules={[{ required: true, message: "Vui lòng nhập kết quả xét nghiệm" }]}>
              <Input placeholder="Ví dụ: Đạt tiêu chuẩn an toàn truyền máu" />
            </Form.Item>
            <Form.Item name="ngayHetHan" label="Ngày hết hạn" rules={[{ required: true, message: "Vui lòng chọn ngày hết hạn" }]}>
              <DatePicker showTime style={{ width: "100%" }} />
            </Form.Item>
            <Button type="primary" htmlType="submit" block loading={testMutation.isPending}>Xác nhận sẵn sàng sử dụng</Button>
          </Form>
        ) : null}
      </Modal>
    </div>
  );
}
