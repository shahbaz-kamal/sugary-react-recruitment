import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about-us", element: <AboutUs></AboutUs> },
    ],
  },
]);

export default router;
