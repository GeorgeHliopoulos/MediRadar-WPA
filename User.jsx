import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useRole } from '../context/RoleContext';
export default function UserPage(){
  const { user } = useRole();
  const [medicine, setMedicine] = useState('');
  const [notes, setNotes] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async () => {
    const ref = collection(db, 'requests');
    await addDoc(ref, { medicine, notes, status: 'open', createdAt: serverTimestamp(), userId: user ? user.uid : null });
    setMedicine(''); setNotes(''); setMsg('Request sent.');
  };
  return (
    <div className="max-w-xl mx-auto mt-10 p-4 space-y-3">
      <h2 className="text-xl">User Request</h2>
      <input className="w-full border p-2 rounded" placeholder="Medicine name" value={medicine} onChange={e=>setMedicine(e.target.value)} />
      <textarea className="w-full border p-2 rounded" placeholder="Notes" value={notes} onChange={e=>setNotes(e.target.value)} />
      <button className="px-3 py-2 rounded bg-green-600 text-white" onClick={submit} disabled={!medicine}>Send</button>
      {msg && <div className="text-green-700 text-sm">{msg}</div>}
    </div>
  );
}