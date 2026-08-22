import { Button, Result } from "antd";
import { ReloadOutlined } from "@ant-design/icons";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  title = "Không thể tải dữ liệu",
  description = "Đã xảy ra lỗi khi kết nối máy chủ. Vui lòng thử lại.",
  onRetry,
}: ErrorStateProps) {
  return (
    <Result
      status="error"
      title={title}
      subTitle={description}
      extra={
        onRetry && (
          <Button icon={<ReloadOutlined />} onClick={onRetry}>
            Thử lại
          </Button>
        )
      }
    />
  );
}
