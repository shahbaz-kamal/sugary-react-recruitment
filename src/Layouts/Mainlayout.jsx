import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full bg-white bg-opacity-50 z-50 backdrop-blur-sm">
        <Navbar></Navbar>
      </header>
      <main className="flex-grow">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Mainlayout;
