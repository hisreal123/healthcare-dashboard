import Navigation from "../../components/Navigation";
import Error from "./Error";
import Dashboard from "../views/Dashboard";
import Appointment from "../views/Appointment";
import Doctor from "../views/Doctor";
import Department from "../views/Department";
import Patient from "../views/Patient";
import Payment from "../views/Payment";


import {
    createBrowserRouter,
  } from "react-router-dom";
  
  
const Pagerouter = createBrowserRouter([
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
      ]
  
    }
  ]);
  
  





  export default router