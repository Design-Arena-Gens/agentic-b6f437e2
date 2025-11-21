import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Esencia y Marketing ? Generadores IG',
  description: 'Herramientas para un Instagram viral con esencia femenina, prop?sito y marketing.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="min-h-screen">
        <header className="border-b border-white/10 sticky top-0 z-20 bg-black/30 backdrop-blur">
          <div className="container-responsive flex items-center justify-between py-4">
            <Link href="/" className="text-xl font-bold text-white">
              <span className="text-brand-400">Esencia</span> & Marketing
            </Link>
            <nav className="flex gap-4 text-sm text-white/80">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <Link href="/bio" className="hover:text-white">Bio</Link>
              <Link href="/hooks" className="hover:text-white">Hooks</Link>
              <Link href="/captions" className="hover:text-white">Copys</Link>
              <Link href="/hashtags" className="hover:text-white">Hashtags</Link>
              <Link href="/calendar" className="hover:text-white">Calendario</Link>
              <Link href="/scripts" className="hover:text-white">Reels</Link>
            </nav>
          </div>
        </header>
        <main className="container-responsive py-8">{children}</main>
        <footer className="container-responsive py-8 text-center text-white/50">
          Hecho con prop?sito para mujeres que desean ser vistas y volver a su esencia.
        </footer>
      </body>
    </html>
  )
}
