import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import './index.css'
import Register from './pages/Register/Register.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
