import React from "react"
import {
  RouterProvider,
} from "react-router-dom";

import P from './routes/PageRouter'


function App() {
  return (
    <RouterProvider router={PageRouter} />
  )
}

export default App
