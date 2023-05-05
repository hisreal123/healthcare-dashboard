import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {Error} from './Error'
import Dashboard from  '../views/Dashboard'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement:<Error />,

    children: [
      {path: "/appointment", element: lazy(() => import('../views/Appointment')) },
      {path: "/doctor",element: lazy(() => import('../views/Doctor'))},
      {path: "/department",element: lazy(() => import('../views/Department'))},
      {path: "/patient",element: lazy(() => import('../views/Patient'))},
      {path: "/payment",element: lazy(() => import('../views/Payment'))},
      {path: "/help",element: lazy(() => import('../views/Help'))},
    ]

  }
]);

export const PageRouter = () =>  <RouterProvider router={router} />
