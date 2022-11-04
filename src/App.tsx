import React from "react"
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom"
import Root from "./routes/root"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
