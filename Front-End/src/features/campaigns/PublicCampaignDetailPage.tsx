import { Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useCampaignDetail } from "./api";
import CampaignDetailView from "./CampaignDetailView";
import LoadingBlock from "../../components/states/LoadingBlock";
import ErrorState from "../../components/states/ErrorState";
import { useAuth } from "../../lib/auth/AuthContext";

export default function PublicCampaignDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated, role } = useAuth();
  const { data, isLoading, isError, refetch } = useCampaignDetail(id);

  if (isLoading) return <LoadingBlock minHeight={400} />;
  if (isError || !data) return <ErrorState onRetry={refetch} />;

  const handleDonateClick = () => {
    if (isAuthenticated && role === "USER") {
      navigate(`/user/chien-dich/${data.id}`);
    } else if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login", { state: { from: `/user/chien-dich/${data.id}` } });
    }
  };

  return (
    <div className="app-container" style={{ padding: "40px 24px 64px", maxWidth: 860 }}>
      <CampaignDetailView
        campaign={data}
        action={
          <Button type="primary" size="large" icon={<HeartOutlined />} onClick={handleDonateClick}>
            Đăng ký hiến máu
          </Button>
        }
      />
    </div>
  );
}
