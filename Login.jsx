import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [err, setErr] = useState('');
  const nav = useNavigate();
  const onSignup = async () => {
    setErr('');
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'profiles', res.user.uid), { role });
      nav('/');
    } catch(e){ setErr(e.message); }
  };
  const onLogin = async () => {
    setErr('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav('/');
    } catch(e){ setErr(e.message); }
  };
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-xl mb-4">Login / Signup</h2>
      <div className="space-y-3">
        <input className="w-full border p-2 rounded" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full border p-2 rounded" type="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <select className="w-full border p-2 rounded" value={role} onChange={e=>setRole(e.target.value)}>
          <option value="user">user</option>
          <option value="pharmacy">pharmacy</option>
          <option value="admin">admin</option>
        </select>
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <div className="flex gap-2">
          <button className="px-3 py-2 rounded bg-green-600 text-white" onClick={onLogin}>Login</button>
          <button className="px-3 py-2 rounded bg-gray-200" onClick={onSignup}>Signup</button>
        </div>
      </div>
    </div>
  );
}