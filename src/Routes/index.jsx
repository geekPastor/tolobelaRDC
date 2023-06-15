import {
    createBrowserRouter,
  } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLaouts from "../layouts/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeLaouts />,
  },
  {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);