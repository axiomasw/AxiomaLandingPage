/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ESTA LÍNEA ES CLAVE: genera la carpeta 'out' con el HTML
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig