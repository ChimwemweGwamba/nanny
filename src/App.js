import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import FaqPage from "./pages/faqPage"
import Resources from "./pages/resources"
import NannyList from "./pages/nannyList"

import AddNanny from "./pages/admin/addNanny"
import IndexNanny from "./pages/admin/IndexNanny"
import ViewNanny from "./pages/admin/viewNanny"
import EditNanny from "./pages/admin/editNanny"
import Login from "./pages/admin/login"

function App() {
  return (
    <div className="font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/nannyList" element={<NannyList />} />

          <Route path="/admin/addNanny" element={<AddNanny />} />
          <Route path="/admin/indexNanny" element={<IndexNanny />} />
          <Route path="/admin/viewNanny" element={<ViewNanny />} />
          <Route path="/admin/editNanny/:id" element={<EditNanny />} />
          <Route path="/admin/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
