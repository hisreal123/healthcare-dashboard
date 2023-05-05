import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Error} from './Error'
import {Dashboard} from  '../views/Dashboard'
import Appointment from  '../views/Appointment'
import Doctor from  '../views/Doctor'
import Patient from  '../views/Patient'
import Department from  '../views/Department'
import Payment from  '../views/Payment'
import Help from  '../views/Help'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement:<Error />,

    children: [
      {path: "/appointment", element: <Appointment />},
      {path: "/doctor",element: <Doctor />},
      {path: "/department",element: <Department /> },
      {path: "/patient",element: <Patient />},
      {path: "/payment",element: <Payment />},
      {path: "/help",element:  <Help />},
    ]

  }
]);

export const PageRouter = () =>  <RouterProvider router={router} />
