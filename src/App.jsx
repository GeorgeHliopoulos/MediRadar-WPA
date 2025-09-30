import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import UserPage from './pages/User';
import PharmacyPage from './pages/Pharmacy';
import AdminPage from './pages/Admin';
export default function App(){
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}
