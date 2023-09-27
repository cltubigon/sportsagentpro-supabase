import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./pages/Home"
import MainNavigation from "./components/layouts/MainNavigation"

function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
