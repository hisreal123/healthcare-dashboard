import  PageRouter  from './routes/PageRouter';
import React from "react"
import {
  RouterProvider,
} from "react-router-dom";




function App() {
  return (
    <RouterProvider router={<PageRouter />} />
  )
}

export default App
