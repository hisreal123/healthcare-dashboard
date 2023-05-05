import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/error";
import Dashboard from "./views/Dashboard";
import Appointment from "./views/Appointment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  
  
  
  
  }
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
