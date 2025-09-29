import React, { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from './firebase'

const RoleCtx = createContext({ user: null, role: 'guest', loading: true })

export const RoleProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState('guest')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      setUser(u)
      if (u) {
        const ref = doc(db, 'profiles', u.uid)
        const snap = await getDoc(ref)
        setRole(snap.exists() ? (snap.data().role || 'user') : 'user')
      } else {
        setRole('guest')
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  return <RoleCtx.Provider value={{ user, role, loading }}>{children}</RoleCtx.Provider>
}

export const useRole = () => useContext(RoleCtx)
