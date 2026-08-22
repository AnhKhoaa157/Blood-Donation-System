import { useQuery } from "@tanstack/react-query";
import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type { DashboardAnalysis } from "../../lib/api/types";

export function getDashboardAnalysis() {
  return apiRequest<DashboardAnalysis>(() => httpClient.get("/api/dashboards/analysis"));
}

export function useDashboardAnalysis() {
  return useQuery({ queryKey: ["dashboard", "analysis"], queryFn: getDashboardAnalysis });
}
