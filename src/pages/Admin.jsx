import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';
import { useRole } from '../context/RoleContext';
export default function AdminPage(){
  const { role } = useRole();
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const q = query(collection(db, 'requests'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, snap => {
      const arr = [];
      snap.forEach(d => arr.push({ id: d.id, ...d.data() }));
      setItems(arr);
    });
    return ()=>unsub();
  }, []);
  if(role !== 'admin'){ return <div className="max-w-xl mx-auto mt-10 p-4">Only admin can view this.</div>; }
  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-xl mb-4">All requests</h2>
      <table className="w-full text-sm">
        <thead><tr className="text-left"><th>Medicine</th><th>Status</th><th>Notes</th></tr></thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id} className="border-t">
              <td className="py-2">{it.medicine}</td>
              <td>{it.status}</td>
              <td className="text-gray-600">{it.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
