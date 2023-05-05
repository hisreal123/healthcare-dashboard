import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: '<Error />'
  },
]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
