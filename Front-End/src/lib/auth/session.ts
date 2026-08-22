import type { UserAccount } from "../api/types";

const TOKEN_KEY = "token";
const USER_KEY = "user";

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser(): UserAccount | null {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as UserAccount;
  } catch {
    return null;
  }
}

export function storeSession(token: string, user: UserAccount): void {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearSession(): void {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

/** Broadcast so other tabs / the auth provider can react to a forced logout. */
export const SESSION_EXPIRED_EVENT = "hienmau:session-expired";

export function notifySessionExpired(): void {
  clearSession();
  window.dispatchEvent(new Event(SESSION_EXPIRED_EVENT));
}
