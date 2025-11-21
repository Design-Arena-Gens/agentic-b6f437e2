"use client"

import { useState } from 'react'
import { generateHooks } from '@/lib/generators'

export default function HooksPage() {
  const [nicho, setNicho] = useState('marketing con prop?sito')
  const [dolor, setDolor] = useState('insegura')
  const [deseo, setDeseo] = useState('visibilidad aut?ntica')
  const hooks = generateHooks(nicho, dolor, deseo)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hooks virales</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-4 space-y-4">
          <Field label="Nicho">
            <input className="input" value={nicho} onChange={e=>setNicho(e.target.value)} />
          </Field>
          <Field label="Dolor actual">
            <input className="input" value={dolor} onChange={e=>setDolor(e.target.value)} />
          </Field>
          <Field label="Deseo">
            <input className="input" value={deseo} onChange={e=>setDeseo(e.target.value)} />
          </Field>
        </div>
        <div className="md:col-span-2 grid gap-4">
          {hooks.map((h, i) => (
            <div key={i} className="card p-4 flex items-center justify-between">
              <p className="text-white/90">{h}</p>
              <button className="text-xs px-2 py-1 rounded bg-white/10" onClick={()=>copyToClipboard(h)}>Copiar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function Field({ label, children }: { label: string, children: React.ReactNode }) {
  return (
    <div>
      <label className="label">{label}</label>
      {children}
    </div>
  )
}

async function copyToClipboard(text: string) {
  try { await navigator.clipboard.writeText(text) } catch {}
}
