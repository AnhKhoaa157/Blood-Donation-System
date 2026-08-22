/** Spring Data pagination envelope returned by every list endpoint. */
export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number; // zero-based current page
  size: number;
  pageable?: { pageNumber: number; pageSize: number };
}

export type LegacyRole = "admin" | "nhanvien" | "nguoidung";
export type NormalizedRole = "ADMIN" | "EMPLOYEE" | "USER";

export type Gender = "nam" | "nu" | "khac";
export type RhFactor = "+" | "-";

export interface BloodType {
  id: number;
  ten: string;
}

/** Shared shape for a person as returned nested inside other resources. */
export interface UserSummary {
  id: number;
  ten: string;
  email?: string;
  soDienThoai?: string;
  ngaySinh?: string;
  gioiTinh?: Gender;
  diaChi?: string;
  nhomMau?: BloodType;
  yeuToRh?: RhFactor;
  chieuCao?: number;
  canNang?: number;
  tienSuBenh?: string;
}

/** Account status: 0 = paused, 1 = active, 2 = hidden. */
export type AccountStatus = 0 | 1 | 2;

export interface UserAccount extends UserSummary {
  tenDangNhap: string;
  vaiTro: LegacyRole;
  trangThai: AccountStatus;
  ngayTao?: string;
  ngayCapNhat?: string;
  latitude?: number;
  longitude?: number;
  maSoNhanVien?: string;
  chucVu?: string;
  phongBan?: string;
  trangThaiLamViec?: "danglamviec" | "nghiviec" | "tamnghi";
  ngayVaoLam?: string;
}

export interface LoginPayload {
  tendangnhap: string;
  matkhau: string;
}

export interface LoginResponse {
  token: string;
  user: UserAccount;
}

export interface RegisterPayload {
  ten: string;
  tendangnhap: string;
  matkhau: string;
  email: string;
  sodienthoai: string;
  ngaysinh: string;
  gioitinh: Gender;
  diachi: string;
  nhommau: number;
  yeutorh: RhFactor;
  tiensubenh?: string;
  cannang: number;
  chieucao: number;
  latitude?: number;
  longitude?: number;
}

/** Campaign lifecycle status, computed by the backend from the date range. */
export type CampaignStatus = "sapdienra" | "dangdienra" | "daketthuc";

export interface Campaign {
  id: number;
  ten: string;
  moTa?: string;
  diaDiem: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  soLuongNguoiToiDa: number;
  soLuongNguoiDangKyHienTai: number;
  trangThaiHoatDong: CampaignStatus;
  ngayTao?: string;
  ngayCapNhat?: string;
  nguoiTao?: UserSummary;
  danhSachYeuCauHieuMau?: DonationRequest[];
}

export type DonationComponent =
  | "toanphan"
  | "huyettuong"
  | "hongcau"
  | "tieucau";

export type DonationRequestStatus =
  | "dangcho"
  | "xacnhan"
  | "dahien"
  | "huy"
  | "tuchoi";

export interface HealthExamResult {
  chieuCao?: string;
  canNang?: string;
  huyetAp?: string;
  nhietDo?: string;
  suDungChatKichThich?: string;
  dangDungThuoc?: string;
  kiemTraHuyetSacTo?: string;
  benhManTinh?: string;
  nguyCoLayNhiem?: string;
  ketLuan?: string;
}

export interface DonationRequest {
  id: number;
  hoatDongHienMauId?: number;
  nguoiHien: UserSummary;
  nguoiDuyet?: UserSummary;
  trangThai: DonationRequestStatus;
  loaiHien: DonationComponent;
  soLuong: number;
  ngayHienMauDuKien: string;
  ngayPhucHoiGanNhat?: string;
  ngayTao: string;
  ghiChu?: string;
  sucKhoeHienTai?: string;
  dangMangThai?: 0 | 1;
  macBenhTruyenNhiem?: 0 | 1;
  formKham?: string;
  viTriLuuTru?: string;
}

/** Blood receive request status as exposed by the admin/staff endpoints. */
export type ReceiveRequestStatus =
  | "dangcho"
  | "dacomau"
  | "dangketnoi"
  | "dahoanthanh"
  | "huy";

export interface ReceiveRequest {
  id: number;
  nguoiNhan: UserSummary;
  nhomMau?: BloodType;
  thanhPhanMauCan: DonationComponent;
  soLuongDonVi: number;
  diaChiNhanMau: string;
  ngayNhanMauDuKien: string;
  lyDo?: string;
  ghiChu?: string;
  sucKhoeHienTai?: string;
  dangMangThai?: 0 | 1;
  macBenhTruyenNhiem?: 0 | 1;
  trangThai: ReceiveRequestStatus;
  ngayTao: string;
  ngayDuyet?: string;
  formKham?: string;
}

export type BloodUnitStatus = "choxetnghiem" | "sansang" | "dasudung" | "huybo";

export interface BloodUnit {
  id: number;
  nhomMau: BloodType;
  ngayLayMau: string;
  ngayHetHan?: string;
  soLuong: number;
  trangThai: BloodUnitStatus;
  ketQuaXetNghiem?: string;
  viTriLuuTru?: string;
  nguoiHien?: UserSummary;
}

export interface CompatibleBlood {
  id: number;
  nhomMauHien: BloodType;
  nhomMauNhan: BloodType;
  trangThai?: number;
}

export interface BlogCategory {
  id: number;
  tieuDe: string;
  noidung?: string;
  trangThai?: number;
  ngayTao?: string;
  ngayCapNhat?: string;
}

export interface Blog {
  id: number;
  tieuDe: string;
  noiDung: string;
  anh?: string;
  danhMuc?: BlogCategory;
  ngayTao?: string;
  ngayCapNhat?: string;
  trangThai?: number;
  nguoiTao?: UserSummary | string;
}

export interface AppNotification {
  id: number;
  tieuDe: string;
  noiDung: string;
  anh?: string;
  ngayBatDau?: string;
  ngayKetThuc?: string;
  ngayTao?: string;
  trangThai?: number;
  nguoiTao?: UserSummary & { vaiTro?: string };
}

export type SupportTicketStatus = "moi" | "dangxuly" | "hoanthanh" | "dahuy";

export interface SupportTicketHistory {
  id: number;
  trangThai: SupportTicketStatus;
  ghiChu?: string;
  ngayTao: string;
  supporter?: UserSummary;
}

export interface SupportTicket {
  id: number;
  hoTen?: string;
  email?: string;
  soDienThoai?: string;
  tieuDe?: string;
  noiDung: string;
  trangThai: SupportTicketStatus;
  ngayTao: string;
  ngayCapNhat?: string;
  histories?: SupportTicketHistory[];
}

export interface DashboardAnalysis {
  totalBloodReceiveRequest: number;
  totalBloodDonationRequest: number;
  totalBloodUnitWareHouse: number;
  totalBlood: number;
  totalEmployee: number;
  totalCustomer: number;
  totalBloodDonationActivity: number;
  totalBlog: number;
}

export interface ApiErrorPayload {
  message?: string;
  error?: string;
}
