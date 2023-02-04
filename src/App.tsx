import { AppProvider } from "./context/AppContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "./routes/root"
import Guides from "./routes/guides"
import Create from "./routes/create"
import Pages from "./routes/pages"
import Page from "./routes/page"
import Preview from "./routes/preview"
import "./App.css"

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/create" element={<Create />} />
          <Route path="/preview/:pageId" element={<Preview />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/page/:id" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
