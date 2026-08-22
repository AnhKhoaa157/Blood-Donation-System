import { useState } from "react";
import { Button, Form, Input, Modal, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useBloodTypes, useCreateBlood } from "./api";
import PageHeader from "../../components/PageHeader";
import { useFeedback } from "../../lib/feedback/useFeedback";
import type { BloodType } from "../../lib/api/types";

export default function BloodTypesManagerPage() {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm<{ ten: string }>();
  const { message } = useFeedback();
  const { data: bloodTypes = [], isLoading } = useBloodTypes();
  const createMutation = useCreateBlood();

  return (
    <div>
      <PageHeader
        title="Quản lý nhóm máu"
        extra={<Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Thêm nhóm máu</Button>}
      />

      <Table<BloodType>
        rowKey="id"
        loading={isLoading}
        dataSource={bloodTypes}
        pagination={false}
        columns={[
          { title: "#", dataIndex: "id", width: 70 },
          {
            title: "Tên nhóm máu",
            dataIndex: "ten",
            render: (v, record) => <Link to={`/employee/nhom-mau/${record.id}`}>{v}</Link>,
          },
        ]}
      />

      <Modal title="Thêm nhóm máu mới" open={open} onCancel={() => setOpen(false)} footer={null} destroyOnClose>
        <Form
          form={form}
          layout="vertical"
          onFinish={async (values) => {
            try {
              await createMutation.mutateAsync(values);
              message.success("Thêm nhóm máu thành công!");
              setOpen(false);
              form.resetFields();
            } catch (error) {
              message.error((error as Error).message);
            }
          }}
        >
          <Form.Item name="ten" label="Tên nhóm máu" rules={[{ required: true, message: "Vui lòng nhập tên nhóm máu" }]}>
            <Input placeholder="VD: O+, AB-, ..." />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={createMutation.isPending}>Thêm</Button>
        </Form>
      </Modal>
    </div>
  );
}
