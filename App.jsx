import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import UserPage from './pages/User'
import PharmacyPage from './pages/Pharmacy'
import AdminPage from './pages/Admin'
import Login from './pages/Login'

export default function App(){
  return (
    <div className="min-h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/pharmacy" element={<PharmacyPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}