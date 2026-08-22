import { httpClient } from "../../lib/http/client";
import { apiRequest } from "../../lib/http/request";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  UserAccount,
} from "../../lib/api/types";

export function loginRequest(payload: LoginPayload) {
  return apiRequest<LoginResponse>(() =>
    httpClient.post("/api/auth/login", payload)
  );
}

export function registerRequest(payload: RegisterPayload) {
  return apiRequest<UserAccount>(() =>
    httpClient.post("/api/auth/register", payload)
  );
}

export interface ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function changePasswordRequest(payload: ChangePasswordPayload) {
  return apiRequest<{ message?: string }>(() =>
    httpClient.post("/api/auth/change-password", payload)
  );
}

export function updateProfileRequest(payload: Record<string, unknown>) {
  return apiRequest<UserAccount>(() =>
    httpClient.post("/api/auth/update-profile", payload)
  );
}

/** Field names match the backend's support-ticket request DTO exactly
 * (flat lowercase, unlike most other Vietnamese-named resources). */
export interface SupportTicketPayload {
  hoten: string;
  email: string;
  sodienthoai: string;
  tieude: string;
  noidung: string;
}

export function createSupportTicketRequest(payload: SupportTicketPayload) {
  return apiRequest<{ id: number }>(() =>
    httpClient.post("/api/support-tickets", payload)
  );
}
