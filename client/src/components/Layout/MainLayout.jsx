import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import RightPanel from "../common/RightPanel";

const MainLayout = ({ authUser }) => {
  return (
    <div className="flex">
      {authUser && <Sidebar />}
      <Outlet />
      {authUser && <RightPanel />}
    </div>
  );
};

export default MainLayout;
