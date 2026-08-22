import type {
  AccountStatus,
  BloodUnitStatus,
  CampaignStatus,
  DonationComponent,
  DonationRequestStatus,
  ReceiveRequestStatus,
  SupportTicketStatus,
} from "../api/types";
import type { StatusMap } from "./types";

export const donationRequestStatusMap: StatusMap<DonationRequestStatus> = {
  dangcho: { label: "Đang chờ duyệt", tone: "warning" },
  xacnhan: { label: "Đã xác nhận", tone: "info" },
  dahien: { label: "Đã hiến máu", tone: "success" },
  huy: { label: "Đã hủy", tone: "neutral" },
  tuchoi: { label: "Từ chối", tone: "error" },
};

export const receiveRequestStatusMap: StatusMap<ReceiveRequestStatus> = {
  dangcho: { label: "Đang chờ", tone: "warning" },
  dacomau: { label: "Đã có máu", tone: "info" },
  dangketnoi: { label: "Đang kết nối người hiến", tone: "accent" },
  dahoanthanh: { label: "Đã hoàn thành", tone: "success" },
  huy: { label: "Đã hủy", tone: "neutral" },
};

export const bloodUnitStatusMap: StatusMap<BloodUnitStatus> = {
  choxetnghiem: { label: "Chờ xét nghiệm", tone: "warning" },
  sansang: { label: "Sẵn sàng sử dụng", tone: "success" },
  dasudung: { label: "Đã sử dụng", tone: "info" },
  huybo: { label: "Đã hủy bỏ", tone: "neutral" },
};

export const campaignStatusMap: StatusMap<CampaignStatus> = {
  sapdienra: { label: "Sắp diễn ra", tone: "info" },
  dangdienra: { label: "Đang diễn ra", tone: "success" },
  daketthuc: { label: "Đã kết thúc", tone: "neutral" },
};

export const donationComponentMap: StatusMap<DonationComponent> = {
  toanphan: { label: "Máu toàn phần", tone: "primary" },
  huyettuong: { label: "Huyết tương", tone: "info" },
  hongcau: { label: "Hồng cầu", tone: "accent" },
  tieucau: { label: "Tiểu cầu", tone: "success" },
};

export const supportTicketStatusMap: StatusMap<SupportTicketStatus> = {
  moi: { label: "Mới", tone: "warning" },
  dangxuly: { label: "Đang xử lý", tone: "info" },
  hoanthanh: { label: "Hoàn thành", tone: "success" },
  dahuy: { label: "Đã hủy", tone: "neutral" },
};

export const accountStatusMap: StatusMap<`${AccountStatus}`> = {
  "0": { label: "Tạm dừng", tone: "warning" },
  "1": { label: "Đang hoạt động", tone: "success" },
  "2": { label: "Đã ẩn", tone: "neutral" },
};

export const genderLabel: Record<string, string> = {
  nam: "Nam",
  nu: "Nữ",
  khac: "Khác",
};
