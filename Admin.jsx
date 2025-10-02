import React from 'react'
import Card from '../ui/Card'

export default function Admin(){
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">Admin dashboard</h2>
      <div className="grid md:grid-cols-3 gap-5">
        <Card title="Pharmacies">
          <p className="text-muted">Add, verify, and manage partner pharmacies.</p>
        </Card>
        <Card title="Requests">
          <p className="text-muted">Monitor request volume and response times.</p>
        </Card>
        <Card title="Settings">
          <p className="text-muted">Branding, notifications, and privacy.</p>
        </Card>
      </div>
    </div>
  )
}
