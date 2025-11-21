"use client"

import { useMemo, useState } from 'react'
import { generateCalendar } from '@/lib/generators'

const DEFAULT_PILARES = [
  'Sanaci?n y Autoamor',
  'Marketing con Prop?sito',
  'Autoridad Femenina',
  'Estilo de Vida Consciente',
]

export default function CalendarPage() {
  const [pilares, setPilares] = useState<string[]>(DEFAULT_PILARES)
  const [frecuencia, setFrecuencia] = useState<number>(1)
  const calendario = useMemo(()=>generateCalendar(pilares, Math.max(1, Math.min(3, frecuencia))), [pilares, frecuencia])

  function toggle(p: string) {
    setPilares(prev => prev.includes(p) ? prev.filter(x=>x!==p) : [...prev, p])
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Calendario 30 d?as</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-4 space-y-4">
          <div>
            <label className="label">Frecuencia (posts por d?a)</label>
            <input type="number" min={1} max={3} className="input" value={frecuencia} onChange={e=>setFrecuencia(parseInt(e.target.value)||1)} />
          </div>
          <div>
            <p className="label">Pilares</p>
            <div className="flex flex-col gap-2">
              {DEFAULT_PILARES.map(p => (
                <label key={p} className="inline-flex items-center gap-2 text-white/80">
                  <input type="checkbox" checked={pilares.includes(p)} onChange={()=>toggle(p)} />
                  {p}
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-2 card p-4 overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-white/70">
              <tr>
                <th className="text-left p-2">D?a</th>
                <th className="text-left p-2">Tema</th>
                <th className="text-left p-2">Idea</th>
              </tr>
            </thead>
            <tbody>
              {calendario.map((c) => (
                <tr key={c.dia} className="border-t border-white/10">
                  <td className="p-2">{c.dia}</td>
                  <td className="p-2">{c.tema}</td>
                  <td className="p-2">{c.idea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
