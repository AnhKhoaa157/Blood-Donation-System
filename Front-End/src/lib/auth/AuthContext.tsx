import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import type { LoginPayload, UserAccount } from "../api/types";
import { loginRequest } from "../../features/auth/api";
import { normalizeRole, type NormalizedRole } from "./roles";
import {
  clearSession,
  getStoredToken,
  getStoredUser,
  SESSION_EXPIRED_EVENT,
  storeSession,
} from "./session";

interface AuthContextValue {
  user: UserAccount | null;
  role: NormalizedRole | null;
  isAuthenticated: boolean;
  login: (payload: LoginPayload) => Promise<UserAccount>;
  logout: () => void;
  setUser: (user: UserAccount) => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [user, setUserState] = useState<UserAccount | null>(() =>
    getStoredToken() ? getStoredUser() : null
  );

  const logout = useCallback(() => {
    clearSession();
    setUserState(null);
  }, []);

  useEffect(() => {
    const handleExpired = () => {
      setUserState(null);
      navigate("/login", { replace: true });
    };
    window.addEventListener(SESSION_EXPIRED_EVENT, handleExpired);
    return () => window.removeEventListener(SESSION_EXPIRED_EVENT, handleExpired);
  }, [navigate]);

  const login = useCallback(async (payload: LoginPayload) => {
    const { token, user: loggedInUser } = await loginRequest(payload);
    storeSession(token, loggedInUser);
    setUserState(loggedInUser);
    return loggedInUser;
  }, []);

  const setUser = useCallback((next: UserAccount) => {
    setUserState(next);
    const token = getStoredToken();
    if (token) storeSession(token, next);
  }, []);

  const role = useMemo(() => normalizeRole(user?.vaiTro), [user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      role,
      isAuthenticated: Boolean(user),
      login,
      logout,
      setUser,
    }),
    [user, role, login, logout, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}

