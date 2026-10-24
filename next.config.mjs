// Las variables NEXT_PUBLIC_FIREBASE_* se incrustan en el build estático:
// sin la API key, la biblioteca dinámica se generaría rota. Solo se exige en producción.
if (process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  throw new Error(
    '\n[LinuxKit] Falta NEXT_PUBLIC_FIREBASE_API_KEY.\n' +
      'Define las variables NEXT_PUBLIC_FIREBASE_* (ver .env.example) antes de ejecutar `pnpm build`.\n',
  )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
