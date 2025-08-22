import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";

const ProtectedRoute = () => {
  const location = useLocation();
  const { user, loading } = useSelector((state: RootState) => state.session);

  if (loading) return <div>Loading...</div>;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/sign-in" replace state={{ from: location.pathname }} />
  );
};

export default ProtectedRoute;
