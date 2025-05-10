import React from "react";
import Navbar from "../Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading";

const Mainlayout = () => {
  const { loading } = useAuth();

  if (loading) return <Loading></Loading>;
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed w-full bg-primary bg-opacity-50 z-50 backdrop-blur-sm">
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
