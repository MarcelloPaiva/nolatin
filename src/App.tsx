import { AppProvider } from "./context/AppContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "./routes/root"
import Guides from "./routes/guides"
import About from "./routes/about"
import Credits from "./routes/credits"
import Usability from "./routes/usability"
import Accessibility from "./routes/accessibility"
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
          <Route path="/about" element={<About />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/usability" element={<Usability />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/create" element={<Create />} />
          <Route path="/preview/:pageId" element={<Preview />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/share/:name" element={<Preview share />} />
          <Route path="/share/:name/:pageId" element={<Preview share />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
