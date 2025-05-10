import React from "react";
import logo from "../assets/finalLogo.png";

import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import navMenu from "../Utilities/navMenu";

const Navbar = () => {
  const { logout, user } = useAuth();
 
 const navItems=navMenu()
 console.log(navItems)
  const navigate = useNavigate();
  if (user) {
    console.log(user);
  }
 
  const links = (
    <>
      {navItems.map((link) => {
        if (link.isVisible === true) {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `transition ease-in-out duration-300 font-semibold text-xl hover:bg-transparent ${
                  isActive ? "text-accent underline" : "text-white"
                }`
              }
            >
              <li className=" hover:text-accent hover:underline ">
                <span className="px-2"> {link.title}</span>
              </li>
            </NavLink>
          );
        }
      })}
    </>
  );

  const handleLogout = async () => {
    try {
      await logout();
      Swal.fire({
        title: "Log Out Successfull",
        icon: "success",
        draggable: true,
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
    }
  };

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
          <div className="w-12 h-12">
            <img src={logo} className="rounded-full" alt="" />
          </div>
          <div className="font-extrabold text-xl md:text-3xl hidden md:block">
            <p className="text-accent font-cinzel">
              Shop<span className="text-white">Verse</span>
            </p>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handleLogout}
            className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary text-white duration-300 ease-in-out transition font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="rounded-md border border-primary px-6 py-1 text-xl hover:bg-primary text-white duration-300 ease-in-out transition font-semibold">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
