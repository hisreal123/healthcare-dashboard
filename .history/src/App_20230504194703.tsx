import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./routes/Navigation";
import Error from "./routes/Error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";
import Doctor from "./views/Doctor";
import Department from "./views/Department";
import Patient from "./views/Patient";
import Payment from "./views/Payment";



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
