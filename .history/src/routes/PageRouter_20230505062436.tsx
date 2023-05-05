import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "../components/Navigation";
import Error from "./routes/Error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";
import Doctor from "./views/Doctor";
import Department from "./views/Department";
import Patient from "./views/Patient";
import Payment from "./views/Payment";
import Help from "./views/Help";
const router = createBrowserRouter([
  {
    path: "/",
    component: ,
    errorElement: <Error />,

    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/doctor",
        element: <Doctor />,
      },
      {
        path: "/department",
        element: <Department />,
      },
      {
        path: "/patient",
        element: <Patient />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ]

  }
]);

function PageRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default PageRouter;
