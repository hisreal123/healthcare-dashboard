import  PageRouter  from './routes/PageRouter';
import React from "react"
import {
  RouterProvider,
} from "react-router-dom";

const router  = PageRouter
console.log(router)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
