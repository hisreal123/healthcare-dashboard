import Navigation from "./routes/Navigation";
import Error from "./routes/Error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";
import Doctor from "./views/Doctor";
import Department from "./views/Department";
import Patient from "./views/Patient";
import Payment from "./views/Payment";


import {
    createBrowserRouter,
  } from "react-router-dom";
  
  
const router = crete([
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
  
  