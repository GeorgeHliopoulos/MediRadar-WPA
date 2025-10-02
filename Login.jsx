import React from 'react'

export default function Login(){
  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm text-white/70 mb-1">Email</label>
          <input className="input" placeholder="you@email.com" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-1">Password</label>
          <input type="password" className="input" placeholder="••••••••" />
        </div>
        <button className="btn-primary w-full">Sign in</button>
      </form>
    </div>
  )
}
