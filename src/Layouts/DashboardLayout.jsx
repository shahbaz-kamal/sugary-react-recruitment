import React from "react";
import Sidebar from "../Shared/Sidebar";
import { Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
  const { showSideBar } = useAuth();

  return (
    <div className="w-11/12 mx-auto flex gap-10 py-2">
      {/* sidebar */}
      <div
       className={`min-h-screen rounded-md shadow-lg bg-background bg-opacity-55 pt-10 
        transition-all duration-300 ease-in-out
        ${showSideBar ? "w-full md:w-4/12 xl:w-3/12" : "w-2/12 md:w-1/12"}`}
      >
        <Sidebar></Sidebar>
      </div>
      {/* Content */}
      <div className={`flex-grow bg-background bg-opacity-55 rounded-md shadow-lg pt-10 ${showSideBar?'hidden md:block':""}`}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
