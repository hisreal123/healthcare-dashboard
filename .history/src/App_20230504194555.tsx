import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navigation from "./routes/Navigation";
import Error from "./routes/Error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";

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
        element: <Dashboard />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
    ]

  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
