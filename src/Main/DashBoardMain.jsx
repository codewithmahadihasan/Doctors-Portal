import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../Pages/Dashboard/DashboardHeader";
import Header from "../Pages/Shared/Header/Header";
import { AuthContext } from "../Provider/Auth/AuthProvider";
import { ImCross } from "react-icons/im";

const DashBoardMain = () => {
  const { setSide, side } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      <div className="md:hidden block">
        {!side ? (
          <button className="text-3xl p-4 " onClick={() => setSide(true)}>
            <FaBars></FaBars>
          </button>
        ) : (
          <button className=" text-3xl p-4 " onClick={() => setSide(false)}>
            <ImCross></ImCross>
          </button>
        )}
      </div>
      <div className="flex gap-10  ">
        <div className={side ? "lg:w-80 md:w-48" : "hidden"}>
          <DashboardHeader></DashboardHeader>
        </div>
        <div className="bg-[#F1F5F9] w-full">
          {" "}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashBoardMain;
