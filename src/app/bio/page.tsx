"use client"

import { useState } from 'react'
import { BrandInput, generateBios } from '@/lib/generators'

export default function BioPage() {
  const [form, setForm] = useState<BrandInput>({
    nombre: 'Sof?a',
    nicho: 'marketing con prop?sito',
    audiencia: 'mujeres emprendedoras',
    propuesta: 'vender desde su verdad sin perder su esencia',
    tono: 'empatica',
    emojis: true,
  })

  const bios = generateBios(form)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bio con prop?sito</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4 card p-4">
          <Field label="Nombre">
            <input className="input" value={form.nombre ?? ''} onChange={e=>setForm({ ...form, nombre: e.target.value })} />
          </Field>
          <Field label="Nicho">
            <input className="input" value={form.nicho} onChange={e=>setForm({ ...form, nicho: e.target.value })} />
          </Field>
          <Field label="Audiencia">
            <input className="input" value={form.audiencia} onChange={e=>setForm({ ...form, audiencia: e.target.value })} />
          </Field>
          <Field label="Propuesta de valor">
            <input className="input" value={form.propuesta} onChange={e=>setForm({ ...form, propuesta: e.target.value })} />
          </Field>
          <Field label="Tono">
            <select className="input" value={form.tono} onChange={e=>setForm({ ...form, tono: e.target.value as any })}>
              <option value="suave">Suave</option>
              <option value="empatica">Emp?tica</option>
              <option value="audaz">Audaz</option>
              <option value="elegante">Elegante</option>
            </select>
          </Field>
          <label className="inline-flex items-center gap-2 text-white/80">
            <input type="checkbox" checked={form.emojis} onChange={e=>setForm({ ...form, emojis: e.target.checked })} />
            Incluir emojis
          </label>
        </div>
        <div className="md:col-span-2 grid gap-4">
          {bios.map((b, i) => (
            <div key={i} className="card p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Versi?n {i+1}</h3>
                <button className="text-xs px-2 py-1 rounded bg-white/10" onClick={()=>copyToClipboard(b)}>Copiar</button>
              </div>
              <pre className="whitespace-pre-wrap text-white/90 text-sm">{b}</pre>
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
