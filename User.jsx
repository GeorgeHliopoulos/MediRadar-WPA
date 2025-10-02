import React from 'react'
import Card from '../ui/Card'

export default function User(){
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-semibold">User profile</h2>
      <Card title="Saved requests">
        <p className="text-muted">Sign in to sync across devices.</p>
      </Card>
    </div>
  )
}
