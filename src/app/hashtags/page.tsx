"use client"

import { useMemo, useState } from 'react'
import { generateHashtags } from '@/lib/generators'

export default function HashtagsPage() {
  const [nicho, setNicho] = useState('marketing con prop?sito')
  const [audiencia, setAudiencia] = useState('mujeres emprendedoras')
  const grupos = useMemo(()=>generateHashtags(nicho, audiencia).grupos, [nicho, audiencia])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Hashtags por intenci?n</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-4 space-y-4">
          <Field label="Nicho">
            <input className="input" value={nicho} onChange={e=>setNicho(e.target.value)} />
          </Field>
          <Field label="Audiencia">
            <input className="input" value={audiencia} onChange={e=>setAudiencia(e.target.value)} />
          </Field>
        </div>
        <div className="md:col-span-2 grid gap-4">
          {grupos.map((g, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Grupo {i+1}</h3>
                <button className="text-xs px-2 py-1 rounded bg-white/10" onClick={()=>copyToClipboard(g.join(' '))}>Copiar</button>
              </div>
              <p className="text-white/90 text-sm break-words">{g.join(' ')}</p>
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
