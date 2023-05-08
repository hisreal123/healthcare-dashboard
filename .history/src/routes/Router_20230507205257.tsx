import { createBrowserRouter, RouterProvider, Router } from "react-router-dom";
import Navigation from "../components/Misc/Navigation";

import Error from "../routes/Error";
import Dashboard from "../views/Dashboard";
import Appointment from "../views/Appointment";
import Doctor from "../views/Doctor";
import Department from "../views/Department";
import Payment from "../views/Payment";
import Help from "../views/Help";

import { lazy, Suspense } from "react";

type RouterProps = {
  children: JSX.Element;
};

type RouterProviderProps = {
  router: Router;
  children: JSX.Element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
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
        Component: lazy(() => import("../views/Patient")),
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      {
        path: "/help",
        element: <Help />,
      },
    ],
  },
]);

const AppRouter = ({ router, children }: RouterProviderProps) => (
  <RouterProvider router={router}>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </RouterProvider>
);

export default function RouterWrapper({ children }: RouterProps) {
  return <AppRouter router={router}>{children}</AppRouter>;
}
