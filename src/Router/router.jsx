import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Pages/Overview";
import AllProducts from "../Pages/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about-us", element: <AboutUs></AboutUs> },
      { path: "/login", element: <Login></Login> },
    ],
  },
  // dashboard layout
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: "overview", element: <Overview></Overview> },
      { path: "all-products", element: <AllProducts></AllProducts> },
    ],
  },
]);

export default router;
