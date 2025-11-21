export type BrandInput = {
  nombre?: string
  nicho: string
  audiencia: string
  propuesta: string
  tono: 'suave' | 'audaz' | 'empatica' | 'elegante'
  emojis?: boolean
}

const toneMap: Record<BrandInput['tono'], { adjetivos: string[]; emoji: string }> = {
  suave: { adjetivos: ['suave', 'c?lida', 'amorosa'], emoji: '?' },
  audaz: { adjetivos: ['audaz', 'directa', 'magn?tica'], emoji: '??' },
  empatica: { adjetivos: ['emp?tica', 'cercana', 'sensible'], emoji: '??' },
  elegante: { adjetivos: ['elegante', 'refinada', 'sofisticada'], emoji: '??' },
}

export function generateBios(input: BrandInput): string[] {
  const { nombre, nicho, audiencia, propuesta, tono, emojis = true } = input
  const { adjetivos, emoji } = toneMap[tono]
  const e = (s: string) => (emojis ? s : '')

  return [
    `${e(emoji)} ${nombre ?? ''} | ${nicho}\nAyudo a ${audiencia} a ${propuesta}.\nMarketing con alma + desarrollo personal ${e('??')}\n${e('??')} Programas y recursos`,
    `${e('??')} Estrategia + ${e('??')} Esencia\n${capitalize(nicho)} para ${audiencia}.\n${adjetivos[0]} ? ${adjetivos[1]} ? ${adjetivos[2]}\n${e('??')} Mensajes para colaborar`,
    `${e('??')} Volver a tu verdad y ser vista.\n${capitalize(nicho)} | ${audiencia}\n${propuesta}.\n${e('??')} Tips diarios y ofertas`,
  ]
}

export function generateHooks(nicho: string, dolor: string, deseo: string): string[] {
  return [
    `Nadie te dijo esto sobre ${nicho}?`,
    `Si hoy te sientes ${dolor}, guarda esto.`,
    `La raz?n real por la que ${deseo} a?n no pasa`,
    `3 errores que sabotean tu ${deseo}`,
    `Lo aprend? tras 100+ clientes: ${nicho} sin perder tu esencia`,
    `Te va a doler? pero necesitas escuchar esto (${nicho})`,
  ]
}

export function generateCaption(
  hook: string,
  historia: string,
  valor: string[],
  cta: string
): string {
  const bullets = valor.map((v) => `? ${v}`).join('\n')
  return `${hook}\n\n${historia}\n\n${bullets}\n\n${cta} \n?\nSi esto te sirve, comparte con una mujer que lo necesite.`
}

export function generateHashtags(nicho: string, audiencia: string): { grupos: string[][] } {
  const base = [
    clean(`#${nicho.replace(/\s+/g, '')}`),
    clean(`#${audiencia.replace(/\s+/g, '')}`),
    '##marketingconproposito',
    '##marketingdigital',
    '##desarrollopersonal',
    '##mujeremprendedora',
    '##autoestima',
    '##emprendimientofemenino',
    '##liderazgofemenino',
  ]

  const variantes = [
    '#brandingconalma',
    '#marketingespiritual',
    '#negociosconproposito',
    '#autocuidado',
    '#amorpropio',
    '#contenidoviral',
    '#reelsideas',
    '#estrategiadigital',
  ]

  const grupos: string[][] = [
    base.slice(0, 8),
    [...base.slice(2, 9)].slice(0, 8),
    [...variantes.slice(0, 8)],
  ]

  return { grupos }
}

export function generateCalendar(pilares: string[], frecuencia: number): { dia: number; tema: string; idea: string }[] {
  const ideasPorPilar: Record<string, string[]> = pilares.reduce((acc, p) => {
    acc[p] = [
      `Historia vulnerable: ${p}`,
      `3 aprendizajes sobre ${p}`,
      `Error com?n en ${p} y c?mo evitarlo`,
      `Mini tutorial pr?ctico de ${p}`,
      `Creencia que te frena en ${p}`,
      `Caso real / testimonio (${p})`,
      `Recurso gratuito de ${p}`,
    ]
    return acc
  }, {} as Record<string, string[]>)

  const days = Array.from({ length: 30 }, (_, i) => i + 1)
  const result: { dia: number; tema: string; idea: string }[] = []

  let p = 0
  for (const d of days) {
    const pilar = pilares[p % pilares.length]
    const ideas = ideasPorPilar[pilar]
    const idea = ideas[(d + p) % ideas.length]
    result.push({ dia: d, tema: pilar, idea })
    if (result.length % frecuencia === 0) p++
  }
  return result
}

export function generateReelScript(hook: string, puntos: string[], cta: string) {
  return {
    intro: hook,
    cuerpo: puntos.map((p, i) => `${i + 1}. ${p}`),
    cierre: `${cta} (mira la descripci?n para m?s)`
  }
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function clean(tag: string) {
  return tag.replace(/[^a-zA-Z0-9#]/g, '').toLowerCase()
}
