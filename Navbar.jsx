import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Stethoscope } from 'lucide-react'

const NavItem = ({to, children}) => (
  <NavLink to={to} className={({isActive}) =>
    `px-3 py-2 rounded-xl hover:bg-white/10 ${isActive ? 'bg-white/10 text-white' : 'text-white/80'}`}>
    {children}
  </NavLink>
)

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-surface/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <img src="/logo.svg" alt="MediRadar" className="w-7 h-7" />
          <span className="font-semibold text-lg">MediRadar</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/search">Search</NavItem>
          <NavItem to="/responses">Responses</NavItem>
          <NavItem to="/pharmacy">Pharmacy</NavItem>
          <NavItem to="/admin">Admin</NavItem>
        </nav>
        <Link to="/login" className="btn-primary">Login</Link>
      </div>
    </header>
  )
}
