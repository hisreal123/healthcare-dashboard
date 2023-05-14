import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "../components/Misc/Layout";

import Error from "../routes/Error";
import Dashboard from "../views/Dashboard";
import Appointment from "../views/Appointment";
import Doctor from "../views/Doctor";
import Department from "../views/Department";
import Patient from "../views/Patient/Patient";
import UpdatePatient from "../components/modal/patient/UpdatePatient";
import Payment from "../views/Payment";
import Help from "../views/Help";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        path: "/update/:id",
        element: <UpdatePatient />,
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
