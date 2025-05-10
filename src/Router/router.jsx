import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Overview from "../Pages/Overview";
import AllProducts from "../Pages/AllProducts";
import PrivateRoute from "./PrivateRoute";

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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "overview",
        element: (
          <PrivateRoute>
            <Overview></Overview>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts></AllProducts>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
