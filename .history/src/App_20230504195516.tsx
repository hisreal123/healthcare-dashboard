import React from "react"
import {
  RouterProvider,
} from "react-router-dom";

import {PageRouter} from './'


function App() {
  return (
    <RouterProvider router={PageRouter} />
  )
}

export default App
