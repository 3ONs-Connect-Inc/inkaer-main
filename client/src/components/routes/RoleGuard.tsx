import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

interface RoleGuardProps {
  allowedRoles: ("admin" | "user")[];
}

const RoleGuard = ({ allowedRoles }: RoleGuardProps) => {
  const { role, loading } = useSelector((state: RootState) => state.session);

  if (loading) return <div>Loading...</div>;

  return role && allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default RoleGuard;
