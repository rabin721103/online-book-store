import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Toast from "../toastify/Toast";

const SiteLayout = () => {
  return (
    <div>
      <Toast />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SiteLayout;
