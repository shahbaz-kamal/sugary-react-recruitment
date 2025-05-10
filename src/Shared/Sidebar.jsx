import React, { useState } from "react";
import { BsArrowsExpandVertical } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { RiExpandHorizontalFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import useAuth from "../Hooks/useAuth";
import { AiFillProduct } from "react-icons/ai";

const Sidebar = () => {
  const { showSideBar, setShowSideBar } = useAuth();
  const links = (
    <>
      <NavLink
        to={"/dashboard/overview"}
        className={({ isActive }) =>
          `transition ease-in-out duration-300 font-semibold text-xl hover:bg-transparent ${
            isActive ? "text-primary " : "text-text"
          }`
        }
      >
        <li className=" hover:text-primary hover:underline py-2 flex items-center justify-center w-full">
          <span>
            <GrOverview />
          </span>
          {showSideBar ? <span className="px-2"> Overview</span> : ""}
        </li>
      </NavLink>
      <NavLink
        to={"/dashboard/all-products"}
        className={({ isActive }) =>
          `transition ease-in-out duration-300 font-semibold text-xl hover:bg-transparent ${
            isActive ? "text-primary " : "text-text"
          }`
        }
      >
        <li className=" hover:text-primary hover:underline py-2 flex items-center justify-center w-full">
          <span>
            <AiFillProduct />
          </span>
          {showSideBar ? <span className="px-2"> All Products</span> : ""}
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-end px-6 mb-5">
        {showSideBar ? (
          <span
            className="flex justify-center"
            onClick={() => {
              setShowSideBar(false);
            }}
          >
            <RxCross2 color="#782aed" />
          </span>
        ) : (
          <span
            onClick={() => {
              setShowSideBar(true);
            }}
          >
            <BsArrowsExpandVertical color="#782aed" />
          </span>
        )}

        {/* <RiExpandHorizontalFill size={25} color="#782aed" /> */}
      </div>
      <ul>{links}</ul>
    </div>
  );
};

export default Sidebar;
