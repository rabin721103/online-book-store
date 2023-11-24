import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const SiteLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default SiteLayout;
