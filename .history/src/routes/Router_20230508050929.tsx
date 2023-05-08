import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "../components/Misc/Navigation";

import Error from "../routes/Error";
import Dashboard from "../views/Dashboard";
import Appointment from "../views/Appointment";
import Doctor from "../views/Doctor";
import Department from "../views/Department";
import Payment from "../views/Payment";
import Help from "../views/Help";

import { lazy } from "react";

// A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.

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
        element: lazy(() => import('../views/Patient')),
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



const AppRouter = () => <RouterProvider router={router} />

export default AppRouter
