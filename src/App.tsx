import { AppProvider } from "./context/AppContext"
import {
  createBrowserRouter,
  RouterProvider,
  LoaderFunctionArgs,
} from "react-router-dom"
import { AppContextState } from "./context/AppContext"
import Root from "./routes/root"
import Guides from "./routes/guides"
import About from "./routes/about"
import Credits from "./routes/credits"
import Usability from "./routes/usability"
import Accessibility from "./routes/accessibility"
import Create from "./routes/create"
import Preview from "./routes/preview"
import Pages from "./routes/pages"
import Page from "./routes/page"
import "./App.css"

async function loader({ params }: LoaderFunctionArgs) {
  const response = await fetch(
    `https://api.nolatin.com/json/?friendly_name=${params.name}`,
    {
      method: "GET",
    }
  )
  const json = await response.json()
  return JSON.parse(json[0].json_content) as AppContextState
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/guides",
    element: <Guides />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/credits",
    element: <Credits />,
  },
  {
    path: "/usability",
    element: <Usability />,
  },
  {
    path: "/accessibility",
    element: <Accessibility />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/pages",
    element: <Pages />,
  },
  {
    path: "/page/:id",
    element: <Page />,
  },
  {
    path: "/preview/:pageId",
    element: <Preview />,
  },
  {
    path: "/share/:name",
    element: <Preview share />,
    loader,
  },
  {
    path: "/share/:name/:pageId",
    element: <Preview share />,
    loader,
  },
])

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/usability" element={<Usability />} />
          <Route path={"/accessibility"} element={<Accessibility />} />
          <Route path="/create" element={<Create />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/preview/:pageId" element={<Preview />} />
          <Route
            path="/share/:name"
            element={<Preview share />}
            loader={async ({ params }) => {
              const response = await fetch(
                `https://api.nolatin.com/json/?friendly_name=${params.name}`,
                {
                  method: "GET",
                }
              )
              const json = await response.json()
              const data = JSON.parse(json[0].json_content) as AppContextState
              redirect(`/share/${params.name}/${data?.pages[0].id}`)
            }}
          />
          <Route
            path="/share/:name/:pageId"
            element={<Preview share />}
            loader={async ({ params }) => {
              const response = await fetch(
                `https://api.nolatin.com/json/?friendly_name=${params.name}`,
                {
                  method: "GET",
                }
              )
              const json = await response.json()
              return JSON.parse(json[0].json_content) as AppContextState
            }}
          />
        </Routes>
      </BrowserRouter> */}
    </AppProvider>
  )
}

export default App
