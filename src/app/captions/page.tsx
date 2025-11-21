"use client"

import { useMemo, useState } from 'react'
import { generateCaption } from '@/lib/generators'

export default function CaptionsPage() {
  const [hook, setHook] = useState('Nadie te dijo esto sobre marketing con prop?sito?')
  const [historia, setHistoria] = useState('Hace 3 a?os me promet? vender sin traicionarme. Y descubr? esto:')
  const [valor, setValor] = useState('Tu voz importa,Tu energ?a vende,Vende desde la honestidad,Mu?strate imperfecta')
  const [cta, setCta] = useState('?Quieres mi checklist gratis? Escribe "ESENCIA" en comentarios')

  const caption = useMemo(() => generateCaption(hook, historia, valor.split(',').map(s=>s.trim()).filter(Boolean), cta), [hook, historia, valor, cta])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Copys emocionales</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card p-4 space-y-4">
          <Field label="Hook">
            <input className="input" value={hook} onChange={e=>setHook(e.target.value)} />
          </Field>
          <Field label="Historia breve">
            <textarea className="input h-28" value={historia} onChange={e=>setHistoria(e.target.value)} />
          </Field>
          <Field label="Bullets de valor (separados por coma)">
            <textarea className="input h-24" value={valor} onChange={e=>setValor(e.target.value)} />
          </Field>
          <Field label="CTA">
            <input className="input" value={cta} onChange={e=>setCta(e.target.value)} />
          </Field>
        </div>
        <div className="card p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold">Copy generado</h3>
            <button className="text-xs px-2 py-1 rounded bg-white/10" onClick={()=>copyToClipboard(caption)}>Copiar</button>
          </div>
          <pre className="whitespace-pre-wrap text-white/90 text-sm">{caption}</pre>
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
