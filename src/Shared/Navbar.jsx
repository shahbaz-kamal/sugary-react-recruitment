import React from "react";
import logo from "/logo2.png";
import { navMenu } from "../Utilities/navMenu";
import { Link, NavLink } from "react-router-dom";
import "./Navbar";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const hello=useAuth()
  console.log(hello)
  const links = (
    <>
      {navMenu.map((link) => {
        if (link.isVisible === true) {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `transition ease-in-out duration-300 font-semibold text-xl hover:bg-transparent ${
                  isActive ? "text-primary underline" : "text-text"
                }`
              }
            >
              <li className=" hover:text-primary hover:underline ">
                <span className="px-2"> {link.title}</span>
              </li>
            </NavLink>
          );
        }
      })}
    </>
  );

  return (
    <div className="navbar w-11/12  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white bg-opacity-60 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src={logo} alt="" />
          </div>
          <div className="font-extrabold text-xl md:text-3xl hidden md:block">
            <p className="text-primary font-cinzel">
              Fish<span className="text-text">Tank</span>
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"}>
          {" "}
          <button className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary hover:text-white duration-300 ease-in-out transition font-semibold">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
