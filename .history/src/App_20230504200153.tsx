import React from "react"
import {
  RouterProvider,
} from "react-router-dom";

import PageRouter from './routes/PageRouter'


function App() {
  return (
    <RouterProvider router: any={<PageRouter />} />
  )
}

export default App
