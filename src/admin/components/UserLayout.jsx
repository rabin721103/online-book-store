import React from "react";
import Navbar from "../../site/components/Navbar";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <div className="row">
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default UserLayout;
