import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../firebase'
import { useRole } from '../RoleContext'

export default function AdminPage(){
  const { role } = useRole()
  const [items, setItems] = useState([])

  useEffect(()=>{
    const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, snap => {
      const arr = []
      snap.forEach(d => arr.push({ id: d.id, ...d.data() }))
      setItems(arr)
    })
    return ()=>unsub()
  }, [])

  if(role!=='admin'){
    return <div className="max-w-xl mx-auto mt-8 p-4">Sign in as <b>admin</b> to view system-wide requests.</div>
  }

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <h2 className="text-lg mb-4">Admin – Requests</h2>
      <div className="grid gap-3">
        {items.map(it=> (
          <div key={it.id} className="border rounded-2xl p-3">
            <div className="font-medium">{it.drug}</div>
            <div className="text-sm">User: {it.uid}</div>
            <div className="text-sm">Status: {it.status} • Reply: {it.pharmacyReply||'-'}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
