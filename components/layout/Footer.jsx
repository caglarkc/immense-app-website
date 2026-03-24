import Link from "next/link";

const QUICK_LINKS = [
  { href: "/", label: "Anasayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  {
    href: "/hizmetler/mimari-proje-uygulamalari",
    label: "Hizmetlerimiz",
  },
  { href: "/iletisim", label: "İletişim" },
];

function IconMapPin({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10Z" />
      <circle cx="12" cy="11" r="2.25" />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6.5 3h3l1.5 4.5L9 9.5c1.2 2.4 3.1 4.3 5.5 5.5l2-2 4.5 1.5v3c0 .5-.2 1-.6 1.4C18.7 20.2 14 21 9 15 3 9 3.8 5.3 4.1 4.6c.4-.4.9-.6 1.4-.6Z" />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const CONTACT = [
  { icon: IconMapPin, text: "İstanbul", href: null },
  { icon: IconPhone, text: "0544 482 58 65", href: "tel:+905444825865" },
  { icon: IconPhone, text: "0532 739 58 03", href: "tel:+905327395803" },
  { icon: IconMail, text: "info@clmimarlik.com", href: "mailto:info@clmimarlik.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-accent/25 bg-footerBg text-pageBg">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:grid lg:grid-cols-[1.1fr_0.9fr_1.2fr] lg:gap-12 lg:px-10 lg:py-14">
        <div className="max-w-md">
          <h2 className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-pageBg">
            Hakkımızda
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-pageBg/75">
            CL Mimarlık olarak, kaliteli malzeme ve profesyonel işçilikle
            yenilikçi çözümler sunarak mekanları dönüştürüyor, yaşam
            alanlarınıza değer katıyoruz.
          </p>
        </div>

        <nav
          className="mt-10 border-t border-pageBg/15 pt-10 lg:mt-0 lg:border-t-0 lg:border-l lg:border-pageBg/15 lg:pl-10 lg:pt-0"
          aria-label="Alt menü"
        >
          <h2 className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-pageBg">
            Hızlı linkler
          </h2>
          <ul className="mt-4 space-y-2.5">
            {QUICK_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-sans text-sm text-pageBg/80 transition-colors duration-nav hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 border-t border-pageBg/15 pt-10 lg:mt-0 lg:border-t-0 lg:border-l lg:border-pageBg/15 lg:pl-10 lg:pt-0">
          <h2 className="font-sans text-[0.7rem] font-bold uppercase tracking-[0.18em] text-pageBg">
            İletişim bilgileri
          </h2>
          <ul className="mt-4 space-y-3">
            {CONTACT.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.text}>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="group flex gap-3 transition-colors duration-nav"
                    >
                      <span className="mt-0.5 shrink-0 text-accent/90 transition-colors group-hover:text-accent">
                        <Icon className="h-[1.125rem] w-[1.125rem]" />
                      </span>
                      <span className="font-sans text-sm text-pageBg/85 transition-colors group-hover:text-accent">
                        {row.text}
                      </span>
                    </a>
                  ) : (
                    <span className="flex gap-3">
                      <span className="mt-0.5 shrink-0 text-accent/90">
                        <Icon className="h-[1.125rem] w-[1.125rem]" />
                      </span>
                      <span className="font-sans text-sm text-pageBg/85">
                        {row.text}
                      </span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-pageBg/12">
        <p className="mx-auto max-w-[1400px] px-5 py-6 text-center font-sans text-[0.65rem] uppercase tracking-[0.12em] text-pageBg/50 sm:px-8 sm:text-xs lg:px-10">
          © {new Date().getFullYear()} CL Mimarlık. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
