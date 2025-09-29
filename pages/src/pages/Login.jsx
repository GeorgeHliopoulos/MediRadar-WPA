import React, { useState } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('user')
  const [err, setErr] = useState('')
  const nav = useNavigate()

  const onSignup = async () => {
    setErr('')
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, 'profiles', res.user.uid), { role })
      nav('/')
    } catch(e){ setErr(e.message) }
  }
  const onLogin = async () => {
    setErr('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      nav('/')
    } catch(e){ setErr(e.message) }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-2xl">
      <h1 className="text-xl mb-4">Login / Sign up</h1>
      <input className="w-full border rounded p-2 mb-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="w-full border rounded p-2 mb-2" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div className="mb-2">
        <label className="mr-2">Role on signup:</label>
        <select className="border rounded p-1" value={role} onChange={e=>setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="pharmacy">Pharmacy</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      {err && <div className="text-sm">{err}</div>}
      <div className="flex gap-2 mt-2">
        <button className="border rounded px-3 py-1" onClick={onLogin}>Login</button>
        <button className="border rounded px-3 py-1" onClick={onSignup}>Sign up</button>
      </div>
    </div>
  )
}
