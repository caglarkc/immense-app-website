"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: "1",
    titleLine1: "Sizin ritminize uygun",
    titleLine2: "çözümler",
    description:
      "Ofis, konut ve ticari alanlarda markanıza ve günlük kullanıma uygun ölçeklenebilir projeler üretiyoruz.",
    main: "/assets/mainPage/slayt1.jpg",
    overlap: "/assets/mainPage/slayt2.jpg",
  },
  {
    id: "2",
    titleLine1: "Mekânı sizin hikâyenizle",
    titleLine2: "buluşturuyoruz",
    description:
      "Ön tasarımdan uygulama aşamasına kadar her adımda şeffaf iletişim ve net programlar sunuyoruz.",
    main: "/assets/mainPage/slayt2.jpg",
    overlap: "/assets/mainPage/slayt3.jpg",
  },
  {
    id: "3",
    titleLine1: "Sahada kalite",
    titleLine2: "planda netlik",
    description:
      "Usta ekipler ve kontrollü iş akışıyla teslim tarihlerine uygun, sürdürülebilir malzeme seçimleriyle ilerliyoruz.",
    main: "/assets/mainPage/slayt3.jpg",
    overlap: "/assets/mainPage/slayt4.jpg",
  },
  {
    id: "4",
    titleLine1: "Yaşam ve çalışma alanlarında",
    titleLine2: "denge",
    description:
      "Işık, akıllı depolama ve detaylarla günlük konforu ön planda tutan, zamansız mimari öneriler geliştiriyoruz.",
    main: "/assets/mainPage/slayt4.jpg",
    overlap: "/assets/mainPage/slayt1.jpg",
  },
];

const SLIDE_MS = 3000;

function HeroSlideVisual({ slide, priority }) {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden pb-8 md:pb-14 lg:justify-self-end lg:overflow-visible lg:pb-10">
      <div className="relative aspect-[5/3] w-full max-w-xl">
        <Image
          src={slide.main}
          alt=""
          fill
          className="rounded-2xl object-cover shadow-lg shadow-navy/10"
          sizes="(max-width: 1024px) 100vw, 42vw"
          priority={priority}
        />
      </div>
      <div className="absolute bottom-0 left-0 z-10 aspect-[3/4] w-[38%] max-w-[180px] overflow-hidden rounded-xl border-4 border-pageBg shadow-xl shadow-navy/15 sm:w-[42%] sm:max-w-[200px] lg:-bottom-10 lg:-left-16 lg:w-[42%] lg:max-w-[200px] xl:-left-24">
        <Image
          src={slide.overlap}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 40vw, 180px"
        />
      </div>
    </div>
  );
}

function HeroSlideCopy({ slide }) {
  return (
    <div className="max-w-xl">
      <h1 className="font-main text-3xl leading-[1.2] md:text-4xl lg:text-[2.75rem] xl:text-5xl">
        <span className="block text-navy">{slide.titleLine1}</span>
        <span className="mt-1 block font-bold text-text">{slide.titleLine2}</span>
      </h1>
      <p className="mt-6 font-sans text-base leading-relaxed text-text md:text-lg">
        {slide.description}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6">
        <Link
          href="/projeler"
          className="inline-flex h-12 items-center rounded-pill bg-navy px-8 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-md shadow-navy/20 transition-colors duration-nav hover:bg-navy/90"
        >
          Portföyü incele
        </Link>
        <Link
          href="/iletisim"
          className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-text underline decoration-navy/30 underline-offset-4 transition-colors duration-nav hover:text-navy hover:decoration-navy"
        >
          İletişime geç
        </Link>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const n = SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % n);
    }, SLIDE_MS);
    return () => clearInterval(t);
  }, [n]);

  const goTo = (i) => setIndex(i);
  const slide = SLIDES[index];

  return (
    <section
      className="relative overflow-x-clip bg-pageBg"
      aria-roledescription="carousel"
      aria-label="Öne çıkan projeler"
    >
      <div className="mx-auto max-w-[1400px] overflow-x-clip">
        {/* Mobilde yatay translate yok: fade ile geçiş, taşma yok */}
        <div className="lg:hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 px-6 py-14"
            >
              <HeroSlideCopy slide={slide} />
              <HeroSlideVisual slide={slide} priority={slide.id === "1"} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hidden lg:block">
          <motion.div
            className="flex will-change-transform"
            style={{ width: `${n * 100}%` }}
            animate={{ x: `${-(index / n) * 100}%` }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {SLIDES.map((s) => (
              <div
                key={s.id}
                className="grid min-w-0 shrink-0 grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20"
                style={{ width: `${100 / n}%` }}
              >
                <HeroSlideCopy slide={s} />
                <HeroSlideVisual slide={s} priority={s.id === "1"} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="flex justify-center gap-2 pb-10 pt-2 lg:pb-14"
        role="tablist"
        aria-label="Slayt seçimi"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slayt ${i + 1}`}
            className={`h-2.5 rounded-pill transition-all duration-nav ${i === index ? "w-8 bg-navy" : "w-2.5 bg-navy/25 hover:bg-navy/40"}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}
