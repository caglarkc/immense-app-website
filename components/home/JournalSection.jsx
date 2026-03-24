import Image from "next/image";
import Link from "next/link";

/** Ana sayfa önizlemesi — yeni yazı için obje kopyalayıp `slug` + alanları ekleyin */
export const JOURNAL_POSTS = [
  {
    slug: "crafting-comfort",
    image: "/assets/mainPage/slayt1.jpg",
    date: "May 12, 2024",
    category: "Curatorial",
    title: "Crafting Comfort",
    excerpt:
      "How proportion, texture, and quiet detailing turn a residence into a calibrated environment rather than a backdrop.",
  },
  {
    slug: "light-and-volume",
    image: "/assets/mainPage/slayt2.jpg",
    date: "June 3, 2024",
    category: "Studio",
    title: "Light and Volume",
    excerpt:
      "Working through section and façade studies to let daylight set the rhythm of the plan without competing with structure.",
  },
];

function MetaLine({ date, category }) {
  return (
    <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted sm:text-[0.65rem]">
      {date} — {category}
    </p>
  );
}

export default function JournalSection() {
  return (
    <section
      className="w-full bg-pageBgSecondary px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20"
      aria-label="Blog önizlemesi"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-10">
          <header>
            <p className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted sm:text-[0.7rem]">
              Journal
            </p>
            <h2 className="mt-2 font-main text-3xl leading-tight text-navy sm:text-4xl lg:text-[2.35rem]">
              Notes on Form
            </h2>
          </header>
          <Link
            href="/blog"
            className="shrink-0 self-start font-sans text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-navy underline decoration-navy/35 underline-offset-[6px] transition-colors hover:text-accent hover:decoration-accent md:self-auto"
          >
            Read all entries
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-12 md:mt-14 md:grid-cols-2 md:gap-10 lg:mt-16 lg:gap-14 xl:gap-16">
          {JOURNAL_POSTS.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy/40"
              >
                <article>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-navy/5 shadow-sm shadow-navy/10">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-nav group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <MetaLine date={post.date} category={post.category} />
                  <h3 className="mt-3 font-main text-xl leading-snug text-navy transition-colors group-hover:text-navy/90 sm:text-2xl">
                    {post.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-text/90 sm:text-base">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
