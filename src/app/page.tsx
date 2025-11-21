import Link from 'next/link'

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Marketing con esencia femenina y prop?sito
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto">
          Crea un perfil de Instagram magn?tico, aut?ntico y viral. Mezclamos desarrollo personal y
          marketing para mujeres que desean ser vistas, amarse y liderar desde su verdad.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/calendar" className="button-primary">Plan 30 d?as</Link>
          <Link href="/bio" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white/90 hover:bg-white/10">Crear Bio</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        {[
          { href: '/bio', title: 'Bio con prop?sito', desc: '3 versiones listas + CTA + emojis' },
          { href: '/hooks', title: 'Hooks virales', desc: 'Atrae atenci?n en 2 segundos' },
          { href: '/captions', title: 'Copys emocionales', desc: 'Estructuras que convierten' },
          { href: '/hashtags', title: 'Hashtags nicho', desc: 'Descubre y agrupa por intenci?n' },
          { href: '/calendar', title: 'Calendario 30 d?as', desc: 'Pilares, ideas y frecuencia' },
          { href: '/scripts', title: 'Guiones de Reels', desc: '15-30s con CTA potente' },
        ].map((item) => (
          <Link key={item.href} href={item.href} className="card p-6 block hover:bg-white/10 transition">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-white/70 text-sm mt-1">{item.desc}</p>
          </Link>
        ))}
      </section>

      <section className="card p-6">
        <h2 className="text-2xl font-bold">Pilares de contenido</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-white/80">
          <div>
            <p className="font-semibold">Sanaci?n y Autoamor</p>
            <p>Historias, l?mites sanos, rituales, autoestima.</p>
          </div>
          <div>
            <p className="font-semibold">Marketing con Prop?sito</p>
            <p>Posicionamiento, mensajes, ofertas con alma.</p>
          </div>
          <div>
            <p className="font-semibold">Autoridad Femenina</p>
            <p>Liderazgo, vulnerabilidad, voz aut?ntica.</p>
          </div>
          <div>
            <p className="font-semibold">Estilo de Vida Consciente</p>
            <p>Rutinas, behind-the-scenes, h?bitos y energ?a.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
