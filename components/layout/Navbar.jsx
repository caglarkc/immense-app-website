"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PHONE_DISPLAY = "+90 212 000 00 00";
const PHONE_TEL = "+902120000000";

const HIZMETLER = [
  {
    href: "/hizmetler/mimari-proje-uygulamalari",
    label: "Mimari proje uygulamaları",
  },
  {
    href: "/hizmetler/ev-tadilati-dekorasyon",
    label: "Ev tadilatı ve dekorasyonu",
  },
  {
    href: "/hizmetler/zemin-uygulamalari",
    label: "Zemin uygulamaları",
  },
  {
    href: "/hizmetler/ofis-isyeri-tadilati-dekorasyon",
    label: "Ofis işyeri tadilatı ve dekorasyonu",
  },
  {
    href: "/hizmetler/izolasyon-uygulamalari",
    label: "İzolasyon uygulamaları",
  },
];

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      aria-hidden
    >
      <path fill="currentColor" d="M5 6.5 1 2.5h8L5 6.5Z" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const linkClass =
    "font-main text-sm uppercase tracking-[0.12em] text-pageBg/90 transition-colors duration-nav hover:text-accent md:text-[0.8125rem]";

  const navActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-pageBg/15 bg-footerBg shadow-[0_4px_24px_-4px_rgba(0,0,0,0.25)]">
      <div className="mx-auto flex h-[4.5rem] max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:justify-between lg:px-10">
        <Link
          href="/"
          className="relative h-11 w-11 shrink-0 overflow-hidden rounded-sm ring-1 ring-pageBg/25 sm:h-12 sm:w-12"
          aria-label="CL Mimarlık — Ana sayfa"
        >
          <Image
            src="/assets/logo.jpg"
            alt="CL Mimarlık"
            fill
            className="object-cover"
            sizes="48px"
            priority
          />
        </Link>

        <nav
          className="hidden items-center justify-center gap-6 lg:flex xl:gap-10"
          aria-label="Ana menü"
        >
          <Link
            href="/"
            className={`${linkClass} font-main ${navActive("/") && pathname === "/" ? "text-accent" : ""}`}
          >
            Ana Sayfa
          </Link>
          <Link
            href="/hakkimizda"
            className={`${linkClass} font-main ${navActive("/hakkimizda") ? "text-accent" : ""}`}
          >
            Hakkımızda
          </Link>

          <div className="group relative">
            <button
              type="button"
              className={`${linkClass} font-main inline-flex items-center gap-1.5 outline-none ring-offset-2 ring-offset-footerBg focus-visible:ring-2 focus-visible:ring-pageBg/35 ${pathname.startsWith("/hizmetler") ? "text-accent" : ""}`}
              aria-haspopup="true"
            >
              Hizmetlerimiz
              <ChevronDown className="mt-0.5 opacity-80" />
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-nav group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div
                className="w-[min(100vw-2rem,18rem)] border border-navy/10 bg-pageBg py-2 shadow-xl shadow-black/15"
                role="menu"
              >
                {HIZMETLER.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 font-main text-sm leading-snug text-navy transition-colors duration-nav hover:bg-navy/[0.06] hover:text-accent"
                    role="menuitem"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/blog"
            className={`${linkClass} font-main ${navActive("/blog") ? "text-accent" : ""}`}
          >
            Blog
          </Link>
          <Link
            href="/iletisim"
            className={`${linkClass} font-main ${navActive("/iletisim") ? "text-accent" : ""}`}
          >
            İletişim
          </Link>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="hidden rounded-pill border border-pageBg/30 px-4 py-2 font-sans text-sm font-semibold text-pageBg transition-colors duration-nav hover:border-accent/50 hover:bg-pageBg/10 md:inline-flex"
          >
            {PHONE_DISPLAY}
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-pageBg/25 text-pageBg lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <span className="sr-only">Menü</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full bg-pageBg transition-transform duration-nav ${mobileOpen ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-full bg-pageBg transition-opacity duration-nav ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-full bg-pageBg transition-transform duration-nav ${mobileOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-pageBg/15 bg-footerBg lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              <Link
                href="/"
                className={`block py-2 font-main text-sm uppercase tracking-[0.12em] ${pathname === "/" ? "text-accent" : "text-pageBg/90"}`}
              >
                Ana Sayfa
              </Link>
              <Link
                href="/hakkimizda"
                className={`block py-2 font-main text-sm uppercase tracking-[0.12em] ${navActive("/hakkimizda") ? "text-accent" : "text-pageBg/90"}`}
              >
                Hakkımızda
              </Link>

              <div className="border-t border-pageBg/15 pt-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 font-main text-sm uppercase tracking-[0.12em] text-pageBg/90"
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  aria-expanded={mobileServicesOpen}
                >
                  Hizmetlerimiz
                  <ChevronDown
                    className={`transition-transform duration-nav ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-2"
                    >
                      {HIZMETLER.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 font-main text-sm text-pageBg/80 transition-colors hover:text-accent"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/blog"
                className={`block py-2 font-main text-sm uppercase tracking-[0.12em] ${navActive("/blog") ? "text-accent" : "text-pageBg/90"}`}
              >
                Blog
              </Link>
              <Link
                href="/iletisim"
                className={`block py-2 font-main text-sm uppercase tracking-[0.12em] ${navActive("/iletisim") ? "text-accent" : "text-pageBg/90"}`}
              >
                İletişim
              </Link>

              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 inline-flex w-full justify-center rounded-pill border border-pageBg/30 py-2.5 font-sans text-sm font-semibold text-pageBg transition-colors hover:border-accent/50 hover:bg-pageBg/10"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
