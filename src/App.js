import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import FaqPage from "./pages/faqPage"
import Resources from "./pages/resources"

import AddNanny from "./pages/admin/addNanny"
import AdminIndex from "./pages/admin/adminIndex"
import ViewNanny from "./pages/admin/viewNanny"
import EditNanny from "./pages/admin/editNanny"

function App() {
  return (
    <div className="font-Poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="/admin/addNanny" element={<AddNanny />} />
          <Route path="/admin/index" element={<AdminIndex />} />
          <Route path="/admin/viewNanny" element={<ViewNanny />} />
          <Route path="/admin/editNanny/:id" element={<EditNanny />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
