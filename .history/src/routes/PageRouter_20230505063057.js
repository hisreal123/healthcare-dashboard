import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    component: lazy(() => import('../views/Dashboard')),
    errorElement: <Error />,

    children: [
      {path: "/dashboard", component: lazy(() => import('../views/Dashboard')) },
      {path: "/doctor",component: lazy(() => import('../views/Doctor'))},
      {path: "/department",component: lazy(() => import('../views/Department'))},
      {path: "/patient",component: lazy(() => import('../views/Patient'))},
      {path: "/patient",component: lazy(() => import('../views/Patient'))},
      
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
