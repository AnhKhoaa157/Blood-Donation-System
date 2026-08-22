import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { BloodUnit, BloodUnitStatus, Page } from "../../lib/api/types";

export function getBloodUnits(params: {
  page?: number;
  size?: number;
  status?: BloodUnitStatus | "";
}) {
  return apiRequest<Page<BloodUnit>>(() =>
    httpClient.get("/api/admin/blood-unit-warehouses", {
      params: { ...params, status: params.status || undefined },
    })
  );
}

export function cancelBloodUnit(id: number | string, ghiChu: string) {
  return apiRequest<BloodUnit>(() =>
    httpClient.post(`/api/admin/blood-unit-warehouses/${id}/cancel`, { ghiChu })
  );
}

export function markBloodUnitTested(
  id: number | string,
  payload: { ketQuaXetNghiem: string; ngayHetHan: string }
) {
  return apiRequest<BloodUnit>(() =>
    httpClient.post(`/api/admin/blood-unit-warehouses/${id}/tested`, payload)
  );
}

export const bloodUnitKeys = {
  list: (page: number, status: string) => ["blood-units", "list", page, status] as const,
};

export function useBloodUnits(page: number, status: BloodUnitStatus | "" = "", size = 10) {
  return useQuery({
    queryKey: bloodUnitKeys.list(page, status),
    queryFn: () => getBloodUnits({ page, size, status }),
  });
}

export function useCancelBloodUnit() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, ghiChu }: { id: number | string; ghiChu: string }) =>
      cancelBloodUnit(id, ghiChu),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blood-units"] }),
  });
}

export function useMarkBloodUnitTested() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      payload,
    }: {
      id: number | string;
      payload: { ketQuaXetNghiem: string; ngayHetHan: string };
    }) => markBloodUnitTested(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["blood-units"] }),
  });
}
