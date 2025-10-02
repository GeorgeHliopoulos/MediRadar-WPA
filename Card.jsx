import React from 'react'

export default function Card({title, subtitle, children, action}){
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div>
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-muted text-sm">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div>{children}</div>
    </div>
  )
}
