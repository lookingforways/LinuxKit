import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página no encontrada · LinuxKit',
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px', background: '#020617', color: '#ffffff', fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif' }}>
      <div style={{ maxWidth: 480, textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#34d399' }}>Error 404</p>
        <h1 style={{ margin: '16px 0 12px', fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em' }}>Página no encontrada</h1>
        <p style={{ margin: 0, lineHeight: 1.7, color: '#94a3b8' }}>La dirección que buscas no existe o fue movida. Revisa que esté bien escrita o vuelve al inicio de LinuxKit.</p>
        <Link href="/" style={{ display: 'inline-block', marginTop: 28, padding: '12px 20px', borderRadius: 8, background: '#34d399', color: '#020617', fontWeight: 600, textDecoration: 'none' }}>Volver al inicio</Link>
      </div>
    </main>
  )
}
