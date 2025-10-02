// src/components/ui/Skeleton.jsx
export default function Skeleton({ className = '' }) {
  return <div className={`animate-pulse bg-white/10 rounded-xl ${className}`} />
}
