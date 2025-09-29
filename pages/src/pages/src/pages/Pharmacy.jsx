import React, { useEffect, useState } from 'react'
import { collection, query, where, onSnapshot, doc, updateDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useRole } from '../RoleContext'

export default function PharmacyPage(){
  const { role } = useRole()
  const [items, setItems] = useState([])

  useEffect(()=>{
    const q = query(collection(db, 'requests'), where('status', 'in', ['open','reserved']))
    const unsub = onSnapshot(q, snap => {
      const arr = []
      snap.forEach(d => arr.push({ id: d.id, ...d.data() }))
      setItems(arr.sort((a,b)=> (b.createdAt?.seconds||0)-(a.createdAt?.seconds||0)))
    })
    return ()=>unsub()
  }, [])

  const reply = async (id, available) => {
    const ref = doc(db, 'requests', id)
    if(available){
      const until = Timestamp.fromDate(new Date(Date.now() + 60*60*1000))
      await updateDoc(ref, { status: 'reserved', pharmacyReply: 'available', reservedUntil: until, repliedAt: serverTimestamp() })
    } else {
      await updateDoc(ref, { status: 'closed', pharmacyReply: 'unavailable', repliedAt: serverTimestamp() })
    }
  }

  const now = Date.now()

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-lg mb-4">Pharmacy Inbox</h2>
      {role!=='pharmacy' && <div className="mb-4">Tip: Sign in as <b>pharmacy</b> role to act on requests.</div>}
      <div className="grid gap-3">
        {items.map(it=>{
          let timer = ''
          if(it.status==='reserved' && it.reservedUntil?.toDate){
            const diff = it.reservedUntil.toDate().getTime() - now
            if(diff>0){
              const m = Math.floor(diff/60000), s = Math.floor((diff%60000)/1000)
              timer = `${m}m ${s}s remaining`
            } else {
              timer = 'Reservation expired'
            }
          }
          return (
            <div key={it.id} className="border rounded-2xl p-3">
              <div className="font-medium">{it.drug}</div>
              <div className="text-sm">{it.notes}</div>
              <div className="text-sm">Status: {it.status}{timer?` • ${timer}`:''}</div>
              {it.status==='open' && (
                <div className="mt-2 flex gap-2">
                  <button className="border rounded px-3 py-1" onClick={()=>reply(it.id, true)}>Available (reserve 60′)</button>
                  <button className="border rounded px-3 py-1" onClick={()=>reply(it.id, false)}>Unavailable</button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
