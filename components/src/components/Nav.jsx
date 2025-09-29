import React from 'react'
import { Link } from 'react-router-dom'
import { useRole } from '../RoleContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'

export default function Nav(){
  const { user } = useRole()
  return (
    <div className="w-full border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold">MediRadar</Link>
        <div className="flex items-center gap-4">
          <Link to="/user">User</Link>
          <Link to="/pharmacy">Pharmacy</Link>
          <Link to="/admin">Admin</Link>
          {user ? (
            <button onClick={()=>signOut(auth)} className="px-3 py-1 rounded border">Logout</button>
          ) : (
            <Link to="/login" className="px-3 py-1 rounded border">Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}
