import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type {
  DonationRequest,
  LegacyRole,
  Page,
  ReceiveRequest,
  UserAccount,
} from "../../lib/api/types";

export function getUsers(page = 1, role: LegacyRole = "nguoidung") {
  return apiRequest<Page<UserAccount>>(() =>
    httpClient.get("/api/users", { params: { page, role } })
  );
}

export function getUserDetail(id: number | string) {
  return apiRequest<UserAccount>(() => httpClient.get(`/api/users/${id}`));
}

export function getUserDonationHistory(userId: number | string, params: Record<string, unknown> = {}) {
  return apiRequest<Page<DonationRequest>>(() =>
    httpClient.get(`/api/admin/blood-donation-requests/user/${userId}`, { params })
  );
}

export function getUserReceiveRequests(userId: number | string, params: Record<string, unknown> = {}) {
  return apiRequest<Page<ReceiveRequest>>(() =>
    httpClient.get(`/api/admin/blood-receive-requests/user/${userId}`, { params })
  );
}

export function deleteUser(id: number | string) {
  return apiRequest<void>(() => httpClient.delete(`/api/users/${id}`));
}

export function createEmployee(payload: Record<string, unknown>) {
  return apiRequest<UserAccount>(() => httpClient.post("/api/users/employee", payload));
}

export function getUsersNearMe() {
  return apiRequest<Array<UserAccount & { distance?: number }>>(() =>
    httpClient.get("/api/users/near-me")
  );
}

export const userKeys = {
  list: (page: number, role: string) => ["users", "list", page, role] as const,
  detail: (id: number | string) => ["users", "detail", id] as const,
  donationHistory: (id: number | string) => ["users", "donation-history", id] as const,
  receiveRequests: (id: number | string) => ["users", "receive-requests", id] as const,
  nearMe: () => ["users", "near-me"] as const,
};

export function useUsers(page: number, role: LegacyRole) {
  return useQuery({ queryKey: userKeys.list(page, role), queryFn: () => getUsers(page, role) });
}

export function useUserDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: userKeys.detail(id ?? ""),
    queryFn: () => getUserDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useUserDonationHistory(id: number | string | undefined, enabled: boolean) {
  return useQuery({
    queryKey: userKeys.donationHistory(id ?? ""),
    queryFn: () => getUserDonationHistory(id as string, { page: 1 }),
    enabled: Boolean(id) && enabled,
  });
}

export function useUserReceiveRequests(id: number | string | undefined, enabled: boolean) {
  return useQuery({
    queryKey: userKeys.receiveRequests(id ?? ""),
    queryFn: () => getUserReceiveRequests(id as string, { page: 1 }),
    enabled: Boolean(id) && enabled,
  });
}

export function useUsersNearMe() {
  return useQuery({ queryKey: userKeys.nearMe(), queryFn: getUsersNearMe });
}

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users", "list"] }),
  });
}

export function useCreateEmployee() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createEmployee,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users", "list"] }),
  });
}
