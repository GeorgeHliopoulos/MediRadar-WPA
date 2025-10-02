import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import Card from '../ui/Card'
import Badge from '../ui/Badge'
import { sampleResponses, formatDistance } from '../utils'

export default function Responses(){
  const location = useLocation()
  const req = location.state || { name: 'Amoxicillin 500mg', qty: '1', notes: '' }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Responses</h2>
        <Badge>Hold: 60m</Badge>
      </div>

      <Card title="Your request">
        <p><strong>{req.name}</strong> · Qty {req.qty} {req.notes && <> · <span className="text-muted">{req.notes}</span></>}</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {sampleResponses.map(r => (
          <Card key={r.id} title={r.pharmacy} subtitle={`${formatDistance(r.distance)} away`}
            action={<Link to="/responses" className="btn-primary">Open in Maps</Link>}>
            <p className="text-muted">Has <strong>{r.item}</strong>.</p>
            <p className="text-muted">Reserved for <strong>{r.holdMins} minutes</strong>.</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
