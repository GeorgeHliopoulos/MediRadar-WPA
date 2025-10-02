import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10 bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-white/70 flex flex-col md:flex-row gap-3 items-center justify-between">
        <p>© {new Date().getFullYear()} MediRadar</p>
        <p>Fast, secure medicine availability — powered by Netlify</p>
      </div>
    </footer>
  )
}
