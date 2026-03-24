import Link from "next/link";

function IconCompass({ className }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M20 10v20M10 20h20"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M20 6l1.5 6-1.5 2-1.5-2L20 6zm0 26l1.5-6-1.5-2-1.5 2L20 32z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconDiamond({ className }) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18 6l10 10-10 14L8 16 18 6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSparkles({ className }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M20 4l1.2 4.2L25 9l-4.2 1.2L20 14l-1.2-4.8L15 9l4.2-1.2L20 4z" />
      <path d="M32 18l1 3.5 3.5 1-3.5 1-1 3.5-1-3.5-3.5-1 3.5-1 1-3.5z" />
      <path d="M10 22l.8 2.8 2.8.8-2.8.8-.8 2.8-.8-2.8-2.8-.8 2.8-.8.8-2.8z" />
    </svg>
  );
}

function IconArrowRight({ className }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function FeaturesBento() {
  return (
    <section
      className="bg-pageBgSecondary px-3 py-[clamp(2rem,5vw,4.5rem)] sm:px-4 lg:px-5"
      aria-labelledby="features-bento-heading"
    >
      <div className="mx-auto max-w-[1400px]">
        <h2 id="features-bento-heading" className="sr-only">
          Öne çıkan yaklaşımlarımız
        </h2>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <article className="flex h-full min-h-0 flex-col rounded-2xl bg-pageBg p-6 shadow-sm shadow-navy/5 sm:p-7">
            <IconCompass className="mb-4 shrink-0 text-navy" />
            <h3 className="font-main text-2xl leading-tight text-navy sm:text-3xl lg:text-[2rem]">
              Structural Integrity
            </h3>
            <p className="mt-4 font-sans text-base leading-relaxed text-text">
              Every line we draw serves a purpose. We eliminate the superfluous
              to reveal the essential character of every project.
            </p>
          </article>

          <div className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-5">
              <article className="flex flex-col rounded-2xl bg-pageBg p-6 shadow-sm shadow-navy/5 sm:p-7">
                <IconDiamond className="mb-3 shrink-0 text-navy" />
                <h3 className="font-main text-xl leading-snug text-navy sm:text-2xl">
                  Pure Materials
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-text sm:text-base">
                  Sourcing the finest textures that age with grace and tell a
                  story.
                </p>
              </article>

              <article className="flex flex-col rounded-2xl bg-pageBg p-6 shadow-sm shadow-navy/5 sm:p-7">
                <IconSparkles className="mb-3 shrink-0 text-navy" />
                <h3 className="font-main text-xl leading-snug text-navy sm:text-2xl">
                  Artisan Craft
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-text sm:text-base">
                  Mastery in execution where every joint and finish is a
                  testament to quality.
                </p>
              </article>
            </div>

            <Link
              href="/hakkimizda"
              className="group flex flex-col gap-4 rounded-2xl bg-navy p-6 shadow-md shadow-navy/20 transition-colors duration-nav hover:bg-navy/95 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-7"
              aria-label="Curated Collections — Hakkımızda sayfasına git"
            >
              <div className="min-w-0">
                <h3 className="font-main text-xl text-pageBgSecondary sm:text-2xl">
                  Curated Collections
                </h3>
                <p className="mt-1.5 max-w-2xl font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                  Explore our latest archive of minimalist living spaces designed
                  for the discerning individual.
                </p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center self-end rounded-xl bg-pageBgSecondary text-navy transition-transform duration-nav group-hover:translate-x-0.5 sm:self-auto">
                <IconArrowRight className="text-navy" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
