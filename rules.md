# CL Mimarlık — Site Kuralları

## Teknoloji
- **Next.js** (App Router) + **Tailwind CSS** + **Framer Motion**
- Her sayfa `app/` altında ayrı klasör ve `page.jsx` dosyası.
- Ortak bileşenler `components/` altında; her bileşen kendi `.jsx` dosyası.
- Global stiller yalnızca `app/globals.css` içinde — başka `.css` dosyası açılmaz.
- Tailwind konfigürasyonu `tailwind.config.js` içinde; renkler, fontlar, aralıklar buradan yönetilir.

## Merkezi Yönetim (Tek Yerden Kontrol)

### `tailwind.config.js` — Tasarım Sistemi
Tüm renkler, fontlar ve ölçüler buraya yazılır. Başka hiçbir yerde sabit değer (`#1B2A4A`, `16px` vb.) kullanılmaz — her şey config üzerinden token olarak gelir.

```js
theme: {
  extend: {
    colors: {
      bg:      '#F5F4F0',   // kırık beyaz ana zemin
      navy:    '#1B2A4A',   // lacivert
      accent:  '#C9A96E',   // altın vurgu
      text:    '#2E2E2E',
      muted:   '#8A8A8A',
    },
    fontFamily: {
      main: ['Playfair Display', 'serif'],
    },
    borderRadius: {
      btn: '0px',           // tüm butonların radius'u buradan
    },
  },
}
```

> Rengi değiştirmek için sadece `colors.navy` satırını düzenle.  
> Fontu değiştirmek için sadece `fontFamily.main` satırını düzenle.  
> Tüm butonların şeklini değiştirmek için sadece `borderRadius.btn` satırını düzenle.

### `globals.css` — CSS Değişkenleri
Tailwind token'larının yanı sıra, animasyon süresi gibi Tailwind'e girmeyen değerler burada `:root` ile tutulur.

```css
:root {
  --transition: 0.3s ease;
  --spacing-section: clamp(4rem, 10vw, 9rem);
}
```

### `components/ui/Button.jsx` — Tek Buton Bileşeni
Tüm butonlar bu bileşenden türer. Tasarımı değiştirmek için yalnızca bu dosya düzenlenir.

```jsx
// variant prop: 'solid' | 'outline' | 'ghost'
export default function Button({ children, variant = 'solid', ...props }) { ... }
```

## Tasarım Tonu
- Estetik, lüks, modern — mimarlık sektörüne uygun.
- Fazla renk, karmaşık animasyon yok. Nefes alan, geniş boşluklar.
- `font-main` (Playfair Display) italic ağırlıklı; başlıklarda `font-main italic` class'ı kullanılır.
- Framer Motion yalnızca sayfa geçişleri ve kritik hero animasyonları için kullanılır; her elemana eklenmez.

## Logo
- Dosya: `public/assets/logo.jpg`
- `<Image src="/assets/logo.jpg" alt="CL Mimarlık" />` ile eklenir (Next.js `Image` bileşeni).
- `width` / `height` prop yerine `fill` + `className` ile boyut CSS'ten kontrol edilir.

## Dosya Yapısı
```
/
├── app/
│   ├── layout.jsx          ← HTML shell, font import, Navbar/Footer
│   ├── globals.css
│   ├── page.jsx            ← Ana Sayfa
│   ├── projeler/
│   │   └── page.jsx
│   ├── blog/
│   │   └── page.jsx
│   └── iletisim/
│       └── page.jsx
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── SectionTitle.jsx
│       └── ProjectCard.jsx
├── public/
│   └── assets/
│       └── logo.jpg
└── tailwind.config.js
```

## Genel Kurallar
- `!important` kullanma.
- Inline style yazma (`style={{ color: 'red' }}` yasak — Tailwind class'ı kullan).
- Her yeni bileşen için yeni token oluşturma — mevcut `tailwind.config.js` token'larını kullan.
- Tüm metinler Türkçe.
- Sayfa `<title>` formatı: `Sayfa Adı | CL Mimarlık` (`metadata` export ile).![1774367142536](image/rules/1774367142536.png)![1774367143764](image/rules/1774367143764.png)