import  PageRouter  from './routes/PageRouter';
import React from "react"
import {
  RouterProvider,
} from "react-router-dom";

const router  = PageRouter


function App() {
  return (
    <RouterProvider router={<PageRouter />} />
  )
}

export default App
