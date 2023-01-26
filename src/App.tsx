import { AppProvider } from "./context/AppContext"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Guides from "./routes/guides"
import Create from "./routes/create"
import Pages from "./routes/pages"
import Page from "./routes/page"
import Preview from "./routes/preview"
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
  {
    path: "preview/:pageId",
    element: <Preview />,
  },
  {
    path: "pages",
    element: <Pages />,
  },
  {
    path: "page/:id",
    element: <Page />,
  },
])

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App
