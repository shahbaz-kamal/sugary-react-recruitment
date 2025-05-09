import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import Login from "../Pages/Login";

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
]);

export default router;
