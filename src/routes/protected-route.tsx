import { Navigate, Outlet } from "react-router";

const isAuthenticated = () => localStorage.getItem("mock-auth") === "true";

export function ProtectedRoute() {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
}
