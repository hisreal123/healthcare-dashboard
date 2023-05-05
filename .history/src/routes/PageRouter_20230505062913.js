import React, { lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    component: lazy(() => import('../routes/Error')),
    errorElement: <Error />,

    children: [
      {path: "/dashboard", component: lazy(() => import('../views/Dashboard')) },
      {path: "/appointment",component: lazy(() => import('../views/Appointment'))
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
