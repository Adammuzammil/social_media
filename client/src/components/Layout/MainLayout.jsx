import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import RightPanel from "../common/RightPanel";

const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <RightPanel />
    </div>
  );
};

export default MainLayout;
