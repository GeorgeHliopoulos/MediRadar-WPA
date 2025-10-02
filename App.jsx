import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

export default function App() {
  return (
    <div className="min-h-dvh bg-hero-gradient bg-grid bg-grid-size text-foreground">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
