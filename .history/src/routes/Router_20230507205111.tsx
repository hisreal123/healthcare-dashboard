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

import { lazy, Suspense } from "react";

const Patient = lazy(() => import('../views/Patient'));

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

const AppRouter = () => (
  <RouterProvider router={router}>
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}>
        <Suspense fallback={<div>Loading...</div>}>
          <Patient />
        </Suspense>
      </RouterProvider>
    </Suspense>
  </RouterProvider>
)

export default AppRouter;
