import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { Page, SupportTicket } from "../../lib/api/types";

export function getSupportTickets(params: Record<string, unknown> = {}) {
  return apiRequest<Page<SupportTicket>>(() =>
    httpClient.get("/api/support-tickets", { params })
  );
}

export function getSupportTicketDetail(id: number | string) {
  return apiRequest<SupportTicket>(() => httpClient.get(`/api/support-tickets/${id}`));
}

export function updateSupportTicketStatus(
  id: number | string,
  payload: { trangthai: string; ghichu?: string }
) {
  return apiRequest<SupportTicket>(() =>
    httpClient.post(`/api/support-tickets/${id}/change-status`, payload)
  );
}

export const supportTicketKeys = {
  list: (params: Record<string, unknown>) => ["support-tickets", "list", params] as const,
  detail: (id: number | string) => ["support-tickets", "detail", id] as const,
};

export function useSupportTickets(params: Record<string, unknown> = {}) {
  return useQuery({ queryKey: supportTicketKeys.list(params), queryFn: () => getSupportTickets(params) });
}

export function useSupportTicketDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: supportTicketKeys.detail(id ?? ""),
    queryFn: () => getSupportTicketDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useUpdateSupportTicketStatus() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: number | string; payload: { trangthai: string; ghichu?: string } }) =>
      updateSupportTicketStatus(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["support-tickets"] }),
  });
}
