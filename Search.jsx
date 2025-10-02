import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Search(){
  const [name, setName] = useState('')
  const [qty, setQty] = useState('1')
  const [notes, setNotes] = useState('')
  const navigate = useNavigate()

  function submit(e){
    e.preventDefault()
    // In real app: send to backend
    navigate('/responses', { state: { name, qty, notes } })
  }

  return (
    <div className="max-w-2xl mx-auto card">
      <h2 className="text-2xl font-semibold mb-4">Create a request</h2>
      <form className="grid md:grid-cols-2 gap-4" onSubmit={submit}>
        <input className="input" value={name} onChange={e=>setName(e.target.value)} placeholder="Medicine name" required />
        <input className="input" value={qty} onChange={e=>setQty(e.target.value)} placeholder="Quantity" required />
        <input className="input md:col-span-2" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Extra notes (optional)" />
        <button className="btn-primary md:col-span-2">Send request</button>
      </form>
    </div>
  )
}
