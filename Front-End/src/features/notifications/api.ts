import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { AppNotification, Page } from "../../lib/api/types";

export function getNotifications(params: Record<string, unknown> = {}) {
  return apiRequest<Page<AppNotification>>(() =>
    httpClient.get("/api/notifications", { params })
  );
}

export function getActiveNotifications(params: Record<string, unknown> = {}) {
  return apiRequest<Page<AppNotification>>(() =>
    httpClient.get("/api/notifications/active", { params })
  );
}

export function getNotificationDetail(id: number | string) {
  return apiRequest<AppNotification>(() => httpClient.get(`/api/notifications/${id}`));
}

export function createNotification(formData: FormData) {
  return apiRequest<AppNotification>(() =>
    httpClient.post("/api/notifications", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export function updateNotification(id: number | string, formData: FormData) {
  return apiRequest<AppNotification>(() =>
    httpClient.put(`/api/notifications/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    })
  );
}

export function deleteNotification(id: number | string) {
  return apiRequest<void>(() => httpClient.delete(`/api/notifications/${id}`));
}

export const notificationKeys = {
  list: (params: Record<string, unknown>) => ["notifications", "list", params] as const,
  active: (params: Record<string, unknown>) => ["notifications", "active", params] as const,
  detail: (id: number | string) => ["notifications", "detail", id] as const,
};

export function useNotifications(params: Record<string, unknown> = {}) {
  return useQuery({ queryKey: notificationKeys.list(params), queryFn: () => getNotifications(params) });
}

export function useActiveNotifications(params: Record<string, unknown> = {}) {
  return useQuery({
    queryKey: notificationKeys.active(params),
    queryFn: () => getActiveNotifications(params),
  });
}

export function useDeleteNotification() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteNotification,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });
}

export function useCreateNotification() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createNotification,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });
}

export function useUpdateNotification(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (formData: FormData) => updateNotification(id, formData),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["notifications"] }),
  });
}
