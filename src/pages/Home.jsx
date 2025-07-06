import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-primary min-h-screen w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-[20%]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-[16px]">
        <div className="bg-white border border-border-color rounded-lg h-full ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
