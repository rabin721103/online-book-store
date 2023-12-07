import Navbar from "../../site/components/Navbar";
import { Outlet } from "react-router-dom";
import Toast from "../../toastify/Toast";

function UserLayout() {
  return (
    <div className="row">
      <div>
        <Toast />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
