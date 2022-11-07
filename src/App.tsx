import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Guides from "./routes/guides"
import Create from "./routes/create"
import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "guides",
    element: <Guides />,
  },
  {
    path: "create",
    element: <Create />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
