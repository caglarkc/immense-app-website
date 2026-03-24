/**
 * GitHub Pages alt yolu (basePath) ile static export + unoptimized Image birlikte
 * kullanıldığında public/ URL'leri kökten (/assets/...) üretilir; bu yardımcı ile öneklenir.
 */
export function withBasePath(path) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) {
    return base ? `${base}/${path}` : `/${path}`;
  }
  return `${base}${path}`;
}
