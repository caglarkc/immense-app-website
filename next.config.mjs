/** @type {import('next').NextConfig} */
/**
 * Özel alan adı (ör. immense-app.com) kökten yayınlanıyorsa basePath OLMAMALI —
 * aksi halde /immense-app-website/_next/... istenir, dosyalar /_next/... altında kalır (404).
 *
 * Sadece Project Pages URL’si kullanacaksanız (username.github.io/repo-adı/):
 *   basePath: '/repo-adı'
 *   env: { NEXT_PUBLIC_BASE_PATH: '/repo-adı' }
 */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
