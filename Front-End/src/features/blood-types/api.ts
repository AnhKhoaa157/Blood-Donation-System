import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { BloodType, CompatibleBlood, Page } from "../../lib/api/types";

export function getBloods(params?: Record<string, unknown>) {
  return apiRequest<BloodType[]>(() => httpClient.get("/api/bloods", { params }));
}

export function getBloodDetail(id: number | string) {
  return apiRequest<BloodType>(() => httpClient.get(`/api/bloods/${id}`));
}

export function createBlood(payload: { ten: string }) {
  return apiRequest<BloodType>(() => httpClient.post("/api/bloods", payload));
}

export function updateBlood(id: number | string, payload: { ten: string }) {
  return apiRequest<BloodType>(() => httpClient.put(`/api/bloods/${id}`, payload));
}

export function deleteBlood(id: number | string) {
  return apiRequest<void>(() => httpClient.delete(`/api/bloods/${id}`));
}

export function getCompatibleBloodsDonate(bloodId: number | string) {
  return apiRequest<CompatibleBlood[]>(() =>
    httpClient.get("/api/compatible-bloods", { params: { bloodId } })
  );
}

export function getCompatibleBloodsReceive(bloodId: number | string) {
  return apiRequest<CompatibleBlood[]>(() =>
    httpClient.get("/api/compatible-bloods/receive", { params: { bloodId } })
  );
}

export function addCompatibleBlood(payload: { nhomMauHien: number; nhomMauNhan: number }) {
  return apiRequest<CompatibleBlood>(() =>
    httpClient.post("/api/admin/compatible-bloods", payload)
  );
}

export function changeCompatibleBloodStatus(id: number | string, trangthai: number) {
  return apiRequest<CompatibleBlood>(() =>
    httpClient.post(`/api/admin/compatible-bloods/${id}/change-status`, { trangthai })
  );
}

export const bloodTypeKeys = {
  all: ["blood-types"] as const,
  list: () => ["blood-types", "list"] as const,
  detail: (id: number | string) => ["blood-types", "detail", id] as const,
  compatibleDonate: (id: number | string) => ["blood-types", "compatible-donate", id] as const,
  compatibleReceive: (id: number | string) => ["blood-types", "compatible-receive", id] as const,
};

export function useBloodTypes() {
  return useQuery({ queryKey: bloodTypeKeys.list(), queryFn: () => getBloods(), staleTime: 5 * 60_000 });
}

export function useBloodDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: bloodTypeKeys.detail(id ?? ""),
    queryFn: () => getBloodDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useCompatibleBloods(bloodId: number | string | undefined) {
  const donate = useQuery({
    queryKey: bloodTypeKeys.compatibleDonate(bloodId ?? ""),
    queryFn: () => getCompatibleBloodsDonate(bloodId as string),
    enabled: Boolean(bloodId),
  });
  const receive = useQuery({
    queryKey: bloodTypeKeys.compatibleReceive(bloodId ?? ""),
    queryFn: () => getCompatibleBloodsReceive(bloodId as string),
    enabled: Boolean(bloodId),
  });
  return { donate, receive };
}

export function useCreateBlood() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createBlood,
    onSuccess: () => qc.invalidateQueries({ queryKey: bloodTypeKeys.all }),
  });
}

export function useUpdateBlood(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: { ten: string }) => updateBlood(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: bloodTypeKeys.all }),
  });
}

export function useAddCompatibleBlood(bloodId: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: addCompatibleBlood,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: bloodTypeKeys.compatibleDonate(bloodId) });
      qc.invalidateQueries({ queryKey: bloodTypeKeys.compatibleReceive(bloodId) });
    },
  });
}

export function useChangeCompatibleBloodStatus(bloodId: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, trangthai }: { id: number | string; trangthai: number }) =>
      changeCompatibleBloodStatus(id, trangthai),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: bloodTypeKeys.compatibleDonate(bloodId) });
      qc.invalidateQueries({ queryKey: bloodTypeKeys.compatibleReceive(bloodId) });
    },
  });
}

export type { Page };
