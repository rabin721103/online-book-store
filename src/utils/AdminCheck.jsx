import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth";

const AdminCheck = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();

  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData?.role !== "ADMIN") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminCheck;
