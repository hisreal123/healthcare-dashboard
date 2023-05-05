import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import router from './routes/router.js'


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
