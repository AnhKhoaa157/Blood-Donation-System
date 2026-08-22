import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type {
  DonationComponent,
  DonationRequest,
  DonationRequestStatus,
  Page,
} from "../../lib/api/types";

// ---- Donor-facing endpoints ----

export interface DonateBloodPayload {
  hoatDongHienMau: number;
  ngayHienMauDuKien: string;
  ngayPhucHoiGanNhat: string;
  ghiChu?: string;
  loaiHien: DonationComponent;
  soLuong: number;
  sucKhoeHienTai?: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
}

export function donateBloodRequest(payload: DonateBloodPayload) {
  return apiRequest<DonationRequest>(() =>
    httpClient.post("/api/blood-donation-requests", payload)
  );
}

export function getMyDonationRequests(
  page = 1,
  status: DonationRequestStatus | "" = "",
  keyword = ""
) {
  return apiRequest<Page<DonationRequest>>(() =>
    httpClient.get("/api/blood-donation-requests", {
      params: { page, status: status || undefined, keyword: keyword || undefined },
    })
  );
}

export function cancelDonationRequest(id: number | string) {
  return apiRequest<DonationRequest>(() =>
    httpClient.post(`/api/blood-donation-requests/${id}/cancel`)
  );
}

export interface UpdateDonationRequestPayload {
  id: number;
  ngayHienMauDuKien: string;
  ngayPhucHoiGanNhat: string;
  ghiChu?: string;
  loaiHien: DonationComponent;
  trangThai: DonationRequestStatus;
  soLuong: number;
  sucKhoeHienTai?: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
}

export function updateDonationRequest(payload: UpdateDonationRequestPayload) {
  return apiRequest<DonationRequest>(() =>
    httpClient.put(`/api/blood-donation-requests/${payload.id}`, payload)
  );
}

// ---- Staff-facing endpoints ----

export function getDonationRequestsAdmin(params: {
  page?: number;
  status?: DonationRequestStatus | "";
}) {
  return apiRequest<Page<DonationRequest>>(() =>
    httpClient.get("/api/admin/blood-donation-requests", {
      params: { ...params, status: params.status || undefined },
    })
  );
}

export function getDonationRequestDetailAdmin(id: number | string) {
  return apiRequest<DonationRequest>(() =>
    httpClient.get(`/api/admin/blood-donation-requests/${id}`)
  );
}

export function approveDonationRequest(id: number | string, ghiChu: string) {
  return apiRequest<DonationRequest>(() =>
    httpClient.post(`/api/admin/blood-donation-requests/${id}/approve`, { ghiChu })
  );
}

export function rejectDonationRequest(
  id: number | string,
  payload: { ghiChu: string; formKham?: string }
) {
  return apiRequest<DonationRequest>(() =>
    httpClient.post(`/api/admin/blood-donation-requests/${id}/reject`, payload)
  );
}

export function completeDonationRequest(
  id: number | string,
  payload: { viTriLuuTru: string; formKham: string }
) {
  return apiRequest<DonationRequest>(() =>
    httpClient.post(`/api/admin/blood-donation-requests/${id}/complete`, payload)
  );
}

// ---- Query hooks ----

export const donationRequestKeys = {
  mine: (page: number, status: string, keyword: string) =>
    ["donation-requests", "mine", page, status, keyword] as const,
  adminList: (page: number, status: string) =>
    ["donation-requests", "admin", page, status] as const,
  adminDetail: (id: number | string) => ["donation-requests", "admin-detail", id] as const,
};

export function useMyDonationRequests(page: number, status: DonationRequestStatus | "" = "", keyword = "") {
  return useQuery({
    queryKey: donationRequestKeys.mine(page, status, keyword),
    queryFn: () => getMyDonationRequests(page, status, keyword),
  });
}

export function useDonationRequestsAdmin(page: number, status: DonationRequestStatus | "" = "") {
  return useQuery({
    queryKey: donationRequestKeys.adminList(page, status),
    queryFn: () => getDonationRequestsAdmin({ page, status }),
  });
}

export function useDonationRequestDetailAdmin(id: number | string | undefined) {
  return useQuery({
    queryKey: donationRequestKeys.adminDetail(id ?? ""),
    queryFn: () => getDonationRequestDetailAdmin(id as string),
    enabled: Boolean(id),
  });
}

export function useDonateBlood() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: donateBloodRequest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["donation-requests"] }),
  });
}

export function useCancelDonationRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: cancelDonationRequest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["donation-requests", "mine"] }),
  });
}

export function useUpdateDonationRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: updateDonationRequest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["donation-requests", "mine"] }),
  });
}

function invalidateAdminDetail(qc: ReturnType<typeof useQueryClient>, id: string) {
  qc.invalidateQueries({ queryKey: ["donation-requests", "admin"] });
  qc.invalidateQueries({ queryKey: donationRequestKeys.adminDetail(id) });
}

export function useApproveDonationRequestMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (ghiChu: string) => approveDonationRequest(id, ghiChu),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}

export function useRejectDonationRequestMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { ghiChu: string; formKham?: string }) => rejectDonationRequest(id, payload),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}

export function useCompleteDonationRequestMutation(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { viTriLuuTru: string; formKham: string }) => completeDonationRequest(id, payload),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}
