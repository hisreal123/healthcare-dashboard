import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    component: lazy(() => import('../views/Dashboard')),
    errorElement:lazy(() => import('./Error')),

    children: [
      {path: "/app", element: lazy(() => import('../views/Dashboard')) },
      {path: "/doctor",element: lazy(() => import('../views/Doctor'))},
      {path: "/department",element: lazy(() => import('../views/Department'))},
      {path: "/patient",element: lazy(() => import('../views/Patient'))},
      {path: "/payment",element: lazy(() => import('../views/Payment'))},
      {path: "/help",element: lazy(() => import('../views/Help'))},
    ]

  }
]);

export const PageRouter = () =>  <RouterProvider router={router} />
