import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import Toast from "../toastify/Toast";

const AdminLayout = () => {
  return (
    <>
      <Toast />
      <div className="container mt-2">
        <div className="row">
          <div className="col-2">
            <AdminSidebar />
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
