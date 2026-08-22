import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { Campaign, CampaignStatus, Page } from "../../lib/api/types";

export function getCampaigns(page = 1, status: CampaignStatus | "" = "") {
  return apiRequest<Page<Campaign>>(() =>
    httpClient.get("/api/blood-donation-activities", {
      params: { page, status: status || undefined },
    })
  );
}

export function getCampaignDetail(id: number | string) {
  return apiRequest<Campaign>(() =>
    httpClient.get(`/api/blood-donation-activities/detail/${id}`)
  );
}

export interface CampaignPayload {
  ten: string;
  diaDiem: string;
  moTa?: string;
  ngayBatDau: string;
  ngayKetThuc: string;
  soLuongNguoiToiDa: number;
  trangthai?: CampaignStatus;
}

export function createCampaign(payload: CampaignPayload) {
  return apiRequest<Campaign>(() =>
    httpClient.post("/api/blood-donation-activities", payload)
  );
}

export function updateCampaign(id: number | string, payload: Partial<CampaignPayload>) {
  return apiRequest<Campaign>(() =>
    httpClient.put(`/api/blood-donation-activities/${id}`, payload)
  );
}

export const campaignKeys = {
  all: ["campaigns"] as const,
  list: (page: number, status: string) => ["campaigns", "list", page, status] as const,
  detail: (id: number | string) => ["campaigns", "detail", id] as const,
};

export function useCampaigns(page: number, status: CampaignStatus | "" = "") {
  return useQuery({
    queryKey: campaignKeys.list(page, status),
    queryFn: () => getCampaigns(page, status),
  });
}

export function useCampaignDetail(id: number | string | undefined) {
  return useQuery({
    queryKey: campaignKeys.detail(id ?? ""),
    queryFn: () => getCampaignDetail(id as string),
    enabled: Boolean(id),
  });
}

export function useCreateCampaign() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: createCampaign,
    onSuccess: () => qc.invalidateQueries({ queryKey: campaignKeys.all }),
  });
}

export function useUpdateCampaign(id: number | string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: Partial<CampaignPayload>) => updateCampaign(id, payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: campaignKeys.all });
      qc.invalidateQueries({ queryKey: campaignKeys.detail(id) });
    },
  });
}
