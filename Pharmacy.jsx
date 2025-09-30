import React, { useEffect, useState } from 'react';
import { collection, query, where, onSnapshot, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useRole } from '../context/RoleContext';
export default function PharmacyPage(){
  const { role } = useRole();
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const q = query(collection(db, 'requests'), where('status', 'in', ['open','reserved']));
    const unsub = onSnapshot(q, snap => {
      const arr = [];
      snap.forEach(d => arr.push({ id: d.id, ...d.data() }));
      setItems(arr);
    });
    return ()=>unsub();
  }, []);
  if(role !== 'pharmacy' && role !== 'admin'){
    return <div className="max-w-xl mx-auto mt-10 p-4">Only pharmacy/admin can view this.</div>;
  }
  const reserve = async (id) => { await updateDoc(doc(db, 'requests', id), { status: 'reserved', reservedAt: serverTimestamp() }); };
  const complete = async (id) => { await updateDoc(doc(db, 'requests', id), { status: 'completed', completedAt: serverTimestamp() }); };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-xl mb-4">Incoming requests</h2>
      <div className="space-y-3">
        {items.map(it => (
          <div key={it.id} className="border rounded p-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{it.medicine}</div>
              <div className="text-sm text-gray-600">{it.notes}</div>
              <div className="text-xs text-gray-500">status: {it.status}</div>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 rounded bg-yellow-300" onClick={()=>reserve(it.id)}>Reserve</button>
              <button className="px-2 py-1 rounded bg-green-300" onClick={()=>complete(it.id)}>Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}