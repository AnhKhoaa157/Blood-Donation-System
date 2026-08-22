import { useState } from "react";
import { Button, List, Select, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddCompatibleBlood,
  useBloodDetail,
  useBloodTypes,
  useChangeCompatibleBloodStatus,
  useCompatibleBloods,
} from "./api";
import PageHeader from "../../components/PageHeader";
import ConfirmButton from "../../components/ConfirmButton";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useFeedback } from "../../lib/feedback/useFeedback";

export default function BloodTypeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { message } = useFeedback();
  const { data: blood, isLoading, isError, refetch } = useBloodDetail(id);
  const { data: allBloodTypes = [] } = useBloodTypes();
  const { donate, receive } = useCompatibleBloods(id);
  const [selected, setSelected] = useState<number[]>([]);

  const addMutation = useAddCompatibleBlood(id as string);
  const statusMutation = useChangeCompatibleBloodStatus(id as string);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !blood) return <ErrorState onRetry={refetch} />;

  const donateList = donate.data ?? [];
  const receiveList = receive.data ?? [];
  const alreadyLinkedIds = new Set(donateList.map((d) => d.nhomMauHien.id));

  const handleAdd = async () => {
    if (selected.length === 0) return message.warning("Chọn ít nhất một nhóm máu.");
    try {
      await Promise.all(selected.map((nhomMauHien) => addMutation.mutateAsync({ nhomMauHien, nhomMauNhan: Number(id) })));
      message.success("Đã thêm liên kết tương thích.");
      setSelected([]);
    } catch (error) {
      message.error((error as Error).message);
    }
  };

  return (
    <div>
      <PageHeader title={`Nhóm máu ${blood.ten}`} extra={<Button onClick={() => navigate("/employee/nhom-mau")}>Quay lại</Button>} />

      <div style={{ display: "grid", gap: 24 }}>
        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Những nhóm máu có thể hiến cho {blood.ten}</h3>
          <List
            dataSource={donateList}
            locale={{ emptyText: "Chưa có dữ liệu" }}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <Tag key="status" color={item.trangThai === 1 ? "success" : "default"}>
                    {item.trangThai === 1 ? "Đang hoạt động" : "Tạm dừng"}
                  </Tag>,
                  <ConfirmButton
                    key="toggle"
                    size="small"
                    confirmTitle={item.trangThai === 1 ? "Tạm dừng tương thích này?" : "Kích hoạt lại tương thích này?"}
                    onConfirm={() => statusMutation.mutate({ id: item.id, trangthai: item.trangThai === 1 ? 0 : 1 })}
                  >
                    {item.trangThai === 1 ? "Tạm dừng" : "Kích hoạt"}
                  </ConfirmButton>,
                ]}
              >
                <Tag color="red" style={{ fontSize: 15, padding: "4px 14px" }}>{item.nhomMauHien.ten}</Tag>
              </List.Item>
            )}
          />
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <Select
              mode="multiple"
              allowClear
              placeholder="Chọn nhóm máu có thể hiến cho nhóm này"
              value={selected}
              onChange={setSelected}
              style={{ minWidth: 260 }}
              options={allBloodTypes.filter((g) => !alreadyLinkedIds.has(g.id)).map((g) => ({ value: g.id, label: g.ten }))}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd} loading={addMutation.isPending}>Thêm</Button>
          </div>
        </div>

        <div style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: 20 }}>
          <h3 style={{ marginTop: 0 }}>Nhóm máu {blood.ten} có thể hiến cho</h3>
          <List
            dataSource={receiveList}
            locale={{ emptyText: "Chưa có dữ liệu" }}
            renderItem={(item) => (
              <List.Item>
                <Tag color="red" style={{ fontSize: 15, padding: "4px 14px" }}>{item.nhomMauNhan?.ten}</Tag>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}
