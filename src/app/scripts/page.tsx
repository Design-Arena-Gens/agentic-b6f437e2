"use client"

import { useMemo, useState } from 'react'
import { generateReelScript } from '@/lib/generators'

export default function ScriptsPage() {
  const [hook, setHook] = useState('La raz?n real por la que no vendes siendo t? misma')
  const [puntos, setPuntos] = useState('Creencia de no ser suficiente,Mensaje poco claro,No muestras tu proceso,CTA d?bil')
  const [cta, setCta] = useState('Escribe "ESENCIA" para enviarte mi gu?a gratis')

  const script = useMemo(()=> generateReelScript(hook, puntos.split(',').map(s=>s.trim()).filter(Boolean), cta), [hook, puntos, cta])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Guiones de Reels (15?30s)</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-4 space-y-4">
          <Field label="Hook (intro)">
            <input className="input" value={hook} onChange={e=>setHook(e.target.value)} />
          </Field>
          <Field label="Puntos (separados por coma)">
            <textarea className="input h-24" value={puntos} onChange={e=>setPuntos(e.target.value)} />
          </Field>
          <Field label="CTA">
            <input className="input" value={cta} onChange={e=>setCta(e.target.value)} />
          </Field>
        </div>
        <div className="card p-4 space-y-3">
          <div>
            <h3 className="font-semibold">Intro</h3>
            <p className="text-white/90">{script.intro}</p>
          </div>
          <div>
            <h3 className="font-semibold">Cuerpo</h3>
            <ul className="list-disc pl-5 text-white/90">
              {script.cuerpo.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Cierre</h3>
            <p className="text-white/90">{script.cierre}</p>
          </div>
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
