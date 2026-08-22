import type { LegacyRole, NormalizedRole } from "../api/types";

export type { LegacyRole, NormalizedRole };

/**
 * The backend has historically returned Vietnamese role strings
 * ("admin" | "nhanvien" | "nguoidung"). Newer/other endpoints may already
 * return normalized values. This accepts both so the UI never has to know
 * which shape a particular response used.
 */
const LEGACY_TO_NORMALIZED: Record<string, NormalizedRole> = {
  admin: "ADMIN",
  nhanvien: "EMPLOYEE",
  nguoidung: "USER",
  ADMIN: "ADMIN",
  EMPLOYEE: "EMPLOYEE",
  USER: "USER",
};

const NORMALIZED_TO_LEGACY: Record<NormalizedRole, LegacyRole> = {
  ADMIN: "admin",
  EMPLOYEE: "nhanvien",
  USER: "nguoidung",
};

export function normalizeRole(role: string | null | undefined): NormalizedRole | null {
  if (!role) return null;
  return LEGACY_TO_NORMALIZED[role] ?? null;
}

export function toLegacyRole(role: NormalizedRole): LegacyRole {
  return NORMALIZED_TO_LEGACY[role];
}

export const ROLE_HOME_PATH: Record<NormalizedRole, string> = {
  ADMIN: "/admin",
  EMPLOYEE: "/employee",
  USER: "/user",
};

export const ROLE_LABEL: Record<NormalizedRole, string> = {
  ADMIN: "Quản trị viên",
  EMPLOYEE: "Nhân viên",
  USER: "Người dùng",
};

export function homePathForRole(role: NormalizedRole | null): string {
  if (!role) return "/";
  return ROLE_HOME_PATH[role];
}
