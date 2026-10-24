import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Colabora con LinuxKit',
  description: 'Escribe a hola@aulaciber.top si quieres colaborar con nuevos comandos para LinuxKit.',
}

const contactEmail = 'hola@aulaciber.top'

export default function ProponerComandoPage() {
  return <main className="min-h-screen bg-slate-950 px-6 py-10 text-white"><div className="mx-auto max-w-3xl"><Link href="/laboratorio/" className="text-sm text-emerald-300">← Volver al laboratorio</Link><h1 className="mt-8 text-4xl font-semibold">Colabora con LinuxKit</h1><p className="mt-3 text-slate-400">¿Tienes un comando útil que no está en el glosario, un caso de uso o una mejora para proponer? Si te interesa colaborar escribiendo contenido para LinuxKit, escríbenos por correo.</p><section className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6"><p className="text-sm font-semibold">Escríbenos a</p><a href={`mailto:${contactEmail}?subject=Colaboraci%C3%B3n%20en%20LinuxKit`} className="mt-2 inline-block font-mono text-lg text-emerald-300 underline underline-offset-4">{contactEmail}</a><p className="mt-5 text-sm font-semibold">Para agilizar la revisión, incluye:</p><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300"><li>Nombre del comando o tema que quieres aportar.</li><li>Categoría (Sistema, Procesos, Archivos, Redes, Seguridad, Auditoría, Contenedores…).</li><li>Una descripción y un uso educativo.</li><li>Advertencias y restricciones (uso solo en sistemas propios o autorizados).</li></ul><p className="mt-5 text-xs leading-5 text-slate-500">Todas las propuestas se revisan manualmente antes de publicarse. No se publican datos personales.</p></section></div></main>
}
