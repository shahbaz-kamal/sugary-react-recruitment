import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children: [{ path: "/", element: <Home></Home> }],
  },
]);

export default router;
