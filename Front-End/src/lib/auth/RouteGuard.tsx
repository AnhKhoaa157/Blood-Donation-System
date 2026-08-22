import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { homePathForRole, type NormalizedRole } from "./roles";
import ForbiddenState from "../../components/states/ForbiddenState";

interface RouteGuardProps {
  allowedRoles: NormalizedRole[];
  children: ReactNode;
}

/**
 * Guards a route subtree by role. Unauthenticated users are sent to the
 * public home; authenticated users whose role isn't allowed here see an
 * explicit forbidden state (with a way back to their own portal) instead
 * of a silent redirect, so it's clear *why* the page didn't load.
 */
export default function RouteGuard({ allowedRoles, children }: RouteGuardProps) {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated || !role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <ForbiddenState homePath={homePathForRole(role)} />;
  }

  return <>{children}</>;
}
