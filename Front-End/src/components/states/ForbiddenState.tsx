import { Button, Result } from "antd";
import { Link } from "react-router-dom";

interface ForbiddenStateProps {
  homePath?: string;
}

export default function ForbiddenState({ homePath = "/" }: ForbiddenStateProps) {
  return (
    <Result
      status="403"
      title="Không có quyền truy cập"
      subTitle="Bạn không có quyền xem nội dung này."
      extra={
        <Link to={homePath}>
          <Button type="primary">Về trang chủ</Button>
        </Link>
      }
    />
  );
}
