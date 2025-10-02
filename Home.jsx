import React from 'react'
import { ArrowRight, ShieldCheck, TimerReset, MapPin } from 'lucide-react'
import Card from '../ui/Card'
import Skeleton from '../ui/Skeleton'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-12">
      <section className="text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-white/80 mb-4">
          <ShieldCheck className="w-4 h-4" /> Privacy-first · No spam · No calls
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Find your medicine <span className="text-brand-300">fast</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto">
          Request once. Nearby pharmacies reply. Pick up with a <strong>60‑minute hold</strong>.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link className="btn-primary" to="/search">I need a medicine <ArrowRight className="w-4 h-4" /></Link>
          <Link className="btn-ghost" to="/pharmacy">I am a pharmacy</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <Card title="Smart Request" subtitle="One request, many pharmacies">
          <p className="text-muted">Your request notifies multiple pharmacies around you — no phone calls.</p>
        </Card>
        <Card title="Hold Timer" subtitle="60 minutes guaranteed">
          <p className="text-muted">Accepted items stay reserved so you can reach the store without stress.</p>
        </Card>
        <Card title="Directions" subtitle="Open in Google Maps">
          <p className="text-muted">Navigate instantly to the pharmacy that confirmed availability.</p>
        </Card>
      </section>

      <section className="grid md:grid-cols-2 gap-5">
        <Card title="Recent activity" subtitle="(sample data)">
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
        </Card>
        <Card title="Live responses" subtitle="(sample data)">
          <div className="space-y-2">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
          </div>
        </Card>
      </section>
    </div>
  )
}
