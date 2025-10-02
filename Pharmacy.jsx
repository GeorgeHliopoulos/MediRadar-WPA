import React from 'react'
import Card from '../ui/Card'

export default function Pharmacy(){
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">Pharmacy console</h2>
      <Card title="Incoming requests" subtitle="(sample)">
        <div className="space-y-2">
          <div className="glass p-3 rounded-xl flex items-center justify-between">
            <div>
              <p className="font-medium">Amoxicillin 500mg</p>
              <p className="text-sm text-white/60">2 packs • 1km away</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-ghost">Decline</button>
              <button className="btn-primary">Accept</button>
            </div>
          </div>
          <div className="glass p-3 rounded-xl flex items-center justify-between">
            <div>
              <p className="font-medium">Insulin Pen</p>
              <p className="text-sm text-white/60">Urgent • 2.3km away</p>
            </div>
            <div className="flex gap-2">
              <button className="btn-ghost">Decline</button>
              <button className="btn-primary">Accept</button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
