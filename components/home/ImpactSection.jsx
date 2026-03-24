"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { target: 15, suffix: "", pad: 0, label: "Years of craft" },
  { target: 120, suffix: "+", pad: 0, label: "Spaces curated" },
  { target: 8, suffix: "", pad: 2, label: "Global awards" },
  { target: 4, suffix: "", pad: 2, label: "Design studio hubs" },
];

const DURATION_MS = 850;
const GAP_BETWEEN_MS = 120;

function formatStat(value, pad, suffix) {
  const n = Math.round(value);
  const core = pad > 0 ? String(n).padStart(pad, "0") : String(n);
  return core + suffix;
}

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const [values, setValues] = useState(() => STATS.map(() => 0));
  const startedRef = useRef(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let cancelled = false;
    let rafId = 0;
    let timeoutId = 0;

    const clearTimers = () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };

    const animateOne = (index) => {
      if (cancelled || index >= STATS.length) return;
      const { target } = STATS[index];
      const start = performance.now();

      const tick = (now) => {
        if (cancelled) return;
        const t = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - (1 - t) ** 3;
        const v = Math.round(eased * target);
        setValues((prev) => {
          const next = [...prev];
          next[index] = v;
          return next;
        });
        if (t < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          timeoutId = window.setTimeout(() => animateOne(index + 1), GAP_BETWEEN_MS);
        }
      };
      rafId = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return;
        startedRef.current = true;
        animateOne(0);
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => {
      cancelled = true;
      clearTimers();
      obs.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-pageBgSecondary px-4 py-7 sm:px-6 sm:py-8 lg:px-10 lg:py-10"
      aria-label="Özet istatistikler"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <li
              key={stat.label}
              className={`flex flex-col items-center justify-center border-navy/15 px-3 py-5 text-center sm:px-6 sm:py-6 lg:px-8 ${
                i % 2 === 1 ? "border-l" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""} ${
                i !== 0 ? "lg:border-l lg:border-t-0" : ""
              }`}
            >
              <span className="font-main text-4xl tabular-nums text-navy sm:text-5xl lg:text-[2.75rem] xl:text-6xl">
                {formatStat(values[i], stat.pad, stat.suffix)}
              </span>
              <p className="mt-1.5 font-sans text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.14em] text-muted sm:text-[0.65rem] sm:tracking-[0.16em]">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
