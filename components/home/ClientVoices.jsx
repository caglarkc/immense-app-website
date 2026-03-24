"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const TESTIMONIALS = [
  {
    id: "1",
    label: "Dialogue I",
    quote:
      "The space no longer just houses our collection; it converses with it. There is a profound silence in the design that speaks volumes about their understanding of light.",
    attribution: "Julianna V., private collector",
    project: "Lake Como residence",
  },
  {
    id: "2",
    label: "Dialogue II",
    quote:
      "Rarely do you find a firm that respects the heritage of a structure while introducing such a sharp, contemporary editorial vision. A masterpiece of restraint.",
    attribution: "Marcus Thorne, Architectural Digest",
    project: "London mews project",
  },
  {
    id: "3",
    label: "Dialogue III",
    quote:
      "Every junction and material was chosen with curatorial patience. The outcome feels enduring — calm, precise, and quietly luxurious without excess.",
    attribution: "Elena R., design patron",
    project: "Bosphorus penthouse",
  },
  {
    id: "4",
    label: "Dialogue IV",
    quote:
      "They translated a demanding brief into luminous, legible spaces. The process was as considered as the architecture; the result speaks for itself.",
    attribution: "David K., development lead",
    project: "Ankara gallery annex",
  },
];

export default function ClientVoices() {
  return (
    <section
      className="w-full bg-pageBg px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16"
      aria-label="Müşteri yorumları"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <header className="mb-10 md:mb-12">
          <h2 className="font-main text-3xl italic leading-tight text-navy sm:text-4xl lg:text-[2.35rem]">
            Client Voices
          </h2>
          <div
            className="mt-3 h-px w-14 bg-navy/20 sm:w-16"
            aria-hidden
          />
        </header>

        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={32}
          loop
          speed={700}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <article className="flex h-full flex-col">
                <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[0.7rem]">
                  {item.label}
                </p>
                <blockquote className="mt-5 font-main text-base italic leading-relaxed text-navy sm:mt-6 sm:text-lg sm:leading-relaxed lg:text-[1.125rem] lg:leading-[1.65]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <footer className="mt-8 flex flex-col gap-1.5 sm:mt-10">
                  <p className="font-sans text-[0.65rem] font-bold uppercase leading-snug tracking-[0.12em] text-navy sm:text-[0.7rem] sm:tracking-[0.14em]">
                    — {item.attribution}
                  </p>
                  <p className="font-sans text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-muted sm:text-[0.6rem] sm:tracking-[0.16em]">
                    {item.project}
                  </p>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
