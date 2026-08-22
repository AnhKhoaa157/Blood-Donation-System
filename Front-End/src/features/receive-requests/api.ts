import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type {
  BloodUnit,
  DonationComponent,
  Page,
  ReceiveRequest,
  ReceiveRequestStatus,
} from "../../lib/api/types";

// ---- Donor-facing endpoints ----

export interface ReceiveRequestPayload {
  thanhPhanMauCan: DonationComponent;
  ngayNhanMauDuKien: string;
  nhomMau: number;
  soLuongDonVi: number;
  diaChiNhanMau: string;
  lyDo: string;
  sucKhoeHienTai: string;
  dangMangThai: 0 | 1;
  macBenhTruyenNhiem: 0 | 1;
}

export function getMyReceiveRequests(params: {
  page?: number;
  status?: string;
  keyword?: string;
  size?: number;
}) {
  return apiRequest<Page<ReceiveRequest>>(() =>
    httpClient.get("/api/blood-receive-requests", { params })
  );
}

export function getMyReceiveRequestDetail(id: number | string) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.get(`/api/blood-receive-requests/${id}`)
  );
}

export function createReceiveRequest(payload: ReceiveRequestPayload) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.post("/api/blood-receive-requests", payload)
  );
}

export function updateReceiveRequest(id: number | string, payload: ReceiveRequestPayload) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.put(`/api/blood-receive-requests/${id}`, payload)
  );
}

export function cancelReceiveRequest(id: number | string) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.post(`/api/blood-receive-requests/${id}/cancel`)
  );
}

// ---- Staff/admin-facing endpoints ----

export function getReceiveRequestsAdmin(params: { page?: number; status?: string }) {
  return apiRequest<Page<ReceiveRequest>>(() =>
    httpClient.get("/api/admin/blood-receive-requests", { params })
  );
}

export function getReceiveRequestDetailAdmin(id: number | string) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.get(`/api/admin/blood-receive-requests/${id}`)
  );
}

type ReceiveRequestAction = "available" | "reject" | "complete";

export function updateReceiveRequestStatus(
  id: number | string,
  action: ReceiveRequestAction,
  payload: Record<string, unknown>
) {
  return apiRequest<ReceiveRequest>(() =>
    httpClient.post(`/api/admin/blood-receive-requests/${id}/${action}`, payload)
  );
}

export function getAvailableBloodUnitsForRequest(requestId: number | string) {
  return apiRequest<BloodUnit[]>(() =>
    httpClient.get(
      `/api/admin/blood-receive-requests/${requestId}/list-available-blood-unit-warehouse`
    )
  );
}

export function getUsedBloodUnitsForRequest(requestId: number | string) {
  return apiRequest<BloodUnit[]>(() =>
    httpClient.get(`/api/admin/blood-receive-requests/${requestId}/list-blood-unit-used`)
  );
}

// ---- Query hooks ----

export const receiveRequestKeys = {
  mine: (page: number, status: string, keyword: string) =>
    ["receive-requests", "mine", page, status, keyword] as const,
  mineDetail: (id: number | string) => ["receive-requests", "mine-detail", id] as const,
  adminList: (page: number, status: string) => ["receive-requests", "admin", page, status] as const,
  adminDetail: (id: number | string) => ["receive-requests", "admin-detail", id] as const,
  available: (id: number | string) => ["receive-requests", "available-units", id] as const,
  used: (id: number | string) => ["receive-requests", "used-units", id] as const,
};

export function useMyReceiveRequests(page: number, status: string, keyword = "", size = 9) {
  return useQuery({
    queryKey: receiveRequestKeys.mine(page, status, keyword),
    queryFn: () => getMyReceiveRequests({ page, status: status || undefined, keyword, size }),
  });
}

export function useMyReceiveRequestDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: receiveRequestKeys.mineDetail(id ?? ""),
    queryFn: () => getMyReceiveRequestDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useReceiveRequestsAdmin(page: number, status: string) {
  return useQuery({
    queryKey: receiveRequestKeys.adminList(page, status),
    queryFn: () => getReceiveRequestsAdmin({ page, status: status || undefined }),
  });
}

export function useReceiveRequestDetailAdmin(id: number | string | undefined) {
  return useQuery({
    queryKey: receiveRequestKeys.adminDetail(id ?? ""),
    queryFn: () => getReceiveRequestDetailAdmin(id as string),
    enabled: Boolean(id),
  });
}

export function useAvailableBloodUnits(requestId: number | string | undefined) {
  return useQuery({
    queryKey: receiveRequestKeys.available(requestId ?? ""),
    queryFn: () => getAvailableBloodUnitsForRequest(requestId as string),
    enabled: Boolean(requestId),
  });
}

export function useUsedBloodUnits(requestId: number | string | undefined) {
  return useQuery({
    queryKey: receiveRequestKeys.used(requestId ?? ""),
    queryFn: () => getUsedBloodUnitsForRequest(requestId as string),
    enabled: Boolean(requestId),
  });
}

export function useCreateReceiveRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createReceiveRequest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["receive-requests", "mine"] }),
  });
}

export function useUpdateReceiveRequest(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: ReceiveRequestPayload) => updateReceiveRequest(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["receive-requests", "mine"] }),
  });
}

export function useCancelReceiveRequest() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: cancelReceiveRequest,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["receive-requests", "mine"] }),
  });
}

function invalidateAdminDetail(qc: ReturnType<typeof useQueryClient>, id: string) {
  qc.invalidateQueries({ queryKey: ["receive-requests", "admin"] });
  qc.invalidateQueries({ queryKey: receiveRequestKeys.adminDetail(id) });
  qc.invalidateQueries({ queryKey: receiveRequestKeys.available(id) });
  qc.invalidateQueries({ queryKey: receiveRequestKeys.used(id) });
}

export function useMarkReceiveRequestAvailable(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { danhSachKhoDonViMau: number[] }) => updateReceiveRequestStatus(id, "available", payload),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}

export function useRejectReceiveRequest(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { ghiChu: string; formKham?: string }) => updateReceiveRequestStatus(id, "reject", payload),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}

export function useCompleteReceiveRequest(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { ghiChu?: string; formKham: string }) => updateReceiveRequestStatus(id, "complete", payload),
    onSuccess: () => invalidateAdminDetail(qc, id),
  });
}

export type { ReceiveRequestStatus };
