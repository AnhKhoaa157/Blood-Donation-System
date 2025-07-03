import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Descriptions,
  Tag,
  message,
  Form,
  Input,
  Spin,
  Select,
  List,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  getBloodDetail,
  updateBlood,
  getCompatibleBloodsReceive,
  getCompatibleBloodsDonate,
  addCompatibleBlood,
  getBloods,
} from "../../services/bloodService";
import {
  PlusOutlined,
  EditOutlined,
  SaveOutlined,
  RollbackOutlined,
} from "@ant-design/icons";

const statusMap = {
  0: { text: "Tạm dừng", color: "gold" },
  1: { text: "Đang hoạt động", color: "green" },
  2: { text: "Ẩn", color: "red" },
};

export default function BloodDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [blood, setBlood] = useState(null);
  const [error, setError] = useState("");
  const [form] = Form.useForm();

  // Dữ liệu hiến/nhận
  const [canReceiveGroups, setCanReceiveGroups] = useState([]); // nhóm này co thể nhận từ
  const [canDonateGroups, setCanDonateGroups] = useState([]); // nhóm này có thể hiến cho
  const [allBloodGroups, setAllBloodGroups] = useState([]); // tất cả nhóm máu

  // State cho việc thêm liên kết
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [adding, setAdding] = useState(false);

  // Lấy chi tiết nhóm máu
  const fetchBlood = async () => {
    setLoading(true);
    try {
      const data = await getBloodDetail(id);
      setBlood(data);
      form.setFieldsValue(data);
      setError("");
    } catch (e) {
      setError(
        e?.response?.data?.message || "Không lấy được thông tin nhóm máu!"
      );
    } finally {
      setLoading(false);
    }
  };

  // Lấy các nhóm máu liên quan và tất cả nhóm máu
  const fetchCompatibleGroups = async () => {
    try {
      const dataReceive = await getCompatibleBloodsReceive(id); // ai hiến cho nhóm này
      const dataDonate = await getCompatibleBloodsDonate(id); // nhóm này hiến cho ai
      const receive = dataReceive.map((item) => item.nhomMauHien);
      const donate = dataDonate.map((item) => item.nhomMauNhan);
      setCanReceiveGroups(receive);
      setCanDonateGroups(donate);
    } catch (e) {
      message.error(e?.message || "Lỗi get list");
      // ignore error
    }
  };

  // Lấy tất cả nhóm máu cho select
  const fetchAllBloodGroups = async () => {
    try {
      const data = await getBloods();
      setAllBloodGroups(data);
    } catch (e) {
      setAllBloodGroups([]);
      message.error(e?.message || "Lỗi get list");
    }
  };

  useEffect(() => {
    fetchBlood();
    fetchAllBloodGroups();
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (blood && blood.id) fetchCompatibleGroups();
    // eslint-disable-next-line
  }, [blood]);
  // Cập nhật thông tin nhóm máu
  const handleSave = async (values) => {
    setLoading(true);
    try {
      await updateBlood(id, values);
      message.success("Cập nhật thành công!");
      setEditMode(false);
      fetchBlood();
    } catch (e) {
      message.error(e?.response?.data?.message || "Cập nhật thất bại!");
    } finally {
      setLoading(false);
    }
  };

  // Thêm nhóm máu hiến cho
  const handleAddCompatible = async () => {
    if (!selectedGroups.length) {
      message.warning("Chọn ít nhất 1 nhóm máu nhận.");
      return;
    }
    setAdding(true);
    try {
      for (let nhomMauHien of selectedGroups) {
        await addCompatibleBlood({
          nhomMauHien,
          nhomMauNhan: Number(id),
        });
      }
      message.success("Thêm thành công!");
      setSelectedGroups([]);
      fetchCompatibleGroups();
    } catch (e) {
      message.error(e?.response?.data?.message || "Thêm thất bại!");
    } finally {
      setAdding(false);
    }
  };

  if (loading)
    return (
      <Spin size="large" style={{ display: "block", margin: "50px auto" }} />
    );

  if (error)
    return (
      <Card title="Lỗi" style={{ marginTop: 50, textAlign: "center" }}>
        <h3>{error}</h3>
        <Button type="primary" onClick={() => navigate(-1)}>
          Quay lại
        </Button>
      </Card>
    );

  return (
    <Card
      title={
        <span style={{ fontWeight: 700, fontSize: 20, color: "#3f51b5" }}>
          🩸 Chi tiết nhóm máu
        </span>
      }
      extra={
        <Button onClick={() => navigate("/employee/bloods-manager")}>
          Quay lại
        </Button>
      }
      style={{ marginTop: 24 }}
    >
      <Descriptions
        bordered
        size="middle"
        style={{ backgroundColor: "white", borderRadius: 10 }}
        column={1}
      >
        <Descriptions.Item label="Tên nhóm máu">
          {blood?.ten || blood?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Mô tả">
          {blood?.mota || blood?.description || <i>Chưa có mô tả</i>}
        </Descriptions.Item>
        <Descriptions.Item label="Trạng thái">
          {typeof blood?.trangThai !== "undefined" ? (
            <Tag color={statusMap[blood.trangThai]?.color}>
              {statusMap[blood.trangThai]?.text || "Không rõ"}
            </Tag>
          ) : (
            <span>-</span>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày tạo">
          {blood?.ngayTao
            ? new Date(blood.ngayTao).toLocaleString("vi-VN")
            : "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Ngày cập nhật">
          {blood?.ngayCapNhat
            ? new Date(blood.ngayCapNhat).toLocaleString("vi-VN")
            : "-"}
        </Descriptions.Item>
      </Descriptions>

      {/* Hiển thị nhóm máu có thể hiến cho */}
      <Card
        title={
          <span style={{ color: "#d32f2f", fontWeight: 600 }}>
            Nhóm máu có thể hiến cho nhóm này
          </span>
        }
        style={{
          marginTop: 28,
          borderRadius: 16,
          background: "#fff",
          border: "1px solid #f8bbd0",
        }}
        bodyStyle={{ padding: 16 }}
      >
        <List
          dataSource={canReceiveGroups}
          locale={{ emptyText: <i>Chưa có dữ liệu</i> }}
          renderItem={(item) => (
            <List.Item>
              <Tag
                color="#1976d2"
                style={{ fontSize: 16, padding: "6px 18px", minWidth: 100 }}
              >
                {item.ten}
              </Tag>
            </List.Item>
          )}
        />
        {/* Thêm mới */}
        <Form layout="inline" style={{ marginTop: 12 }}>
          <Form.Item>
            <Select
              mode="multiple"
              allowClear
              showSearch
              placeholder="Chọn nhóm máu hiến"
              value={selectedGroups}
              style={{ minWidth: 210 }}
              onChange={setSelectedGroups}
              disabled={editMode}
            >
              {allBloodGroups
                .filter((g) => !canReceiveGroups.some((c) => c.id === g.id))
                .map((g) => (
                  <Select.Option key={g.id} value={g.id}>
                    {g.ten}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddCompatible}
              loading={adding}
              disabled={editMode}
              style={{
                borderRadius: 22,
                minWidth: 110,
                background: "#43a047",
                borderColor: "#43a047",
                fontWeight: 600,
              }}
            >
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* Hiển thị nhóm máu mà nhóm này có thể hiến cho */}
      <Card
        title={
          <span style={{ color: "#1976d2", fontWeight: 600 }}>
            Nhóm máu này có thể hiến cho
          </span>
        }
        style={{
          marginTop: 18,
          borderRadius: 16,
          background: "#fff",
          border: "1px solid #b2dfdb",
        }}
        bodyStyle={{ padding: 16 }}
      >
        <List
          dataSource={canDonateGroups}
          locale={{ emptyText: <i>Chưa có dữ liệu</i> }}
          renderItem={(item) => (
            <List.Item>
              <Tag
                color="#d32f2f"
                style={{ fontSize: 16, padding: "6px 18px", minWidth: 100 }}
              >
                {item.ten}
              </Tag>
            </List.Item>
          )}
        />
      </Card>

      {/* Chỉnh sửa thông tin nhóm máu */}
      <Card
        style={{
          marginTop: 30,
          background: "#f3f8fd",
          borderRadius: 14,
          border: "none",
        }}
        bodyStyle={{ padding: 16 }}
      >
        {!editMode ? (
          <Button
            type="primary"
            icon={<EditOutlined />}
            style={{
              background: "#3f51b5",
              borderColor: "#3f51b5",
              borderRadius: 8,
              minWidth: 130,
              fontWeight: 600,
              float: "right",
            }}
            onClick={() => setEditMode(true)}
          >
            Chỉnh sửa
          </Button>
        ) : (
          <Form
            form={form}
            layout="vertical"
            initialValues={blood}
            onFinish={handleSave}
            style={{ maxWidth: 500, margin: "0 auto" }}
          >
            <Form.Item
              label="Tên nhóm máu"
              name="ten"
              rules={[{ required: true, message: "Nhập tên nhóm máu!" }]}
            >
              <Input placeholder="VD: O+, A-, ..." />
            </Form.Item>
            <Form.Item label="Mô tả" name="mota">
              <Input.TextArea
                placeholder="Thông tin mô tả nhóm máu (nếu có)"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
            <div style={{ textAlign: "right", marginTop: 24 }}>
              <Button
                type="primary"
                icon={<SaveOutlined />}
                htmlType="submit"
                style={{
                  marginRight: 8,
                  background: "#43a047",
                  borderColor: "#43a047",
                  fontWeight: 600,
                  borderRadius: 8,
                  minWidth: 110,
                }}
              >
                Lưu
              </Button>
              <Button
                icon={<RollbackOutlined />}
                onClick={() => setEditMode(false)}
                style={{
                  borderRadius: 8,
                  minWidth: 100,
                }}
              >
                Hủy
              </Button>
            </div>
          </Form>
        )}
      </Card>
    </Card>
  );
}
