import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './layout/App'
import Home from './pages/Home'
import Search from './pages/Search'
import Responses from './pages/Responses'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Pharmacy from './pages/Pharmacy'
import User from './pages/User'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="responses" element={<Responses />} />
          <Route path="login" element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
