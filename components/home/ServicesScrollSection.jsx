import Image from "next/image";
import Link from "next/link";

const SLIDES = [
  {
    id: "1",
    image: "/assets/mainPage/slayt1.jpg",
    cardNum: "01.",
    cardLabel: "ÖZ FELSEFE",
    cardQuote:
      "Tasarım eklediğimiz şey değil; geride bırakma cesaretine sahip olduğumuz şeydir.",
    tag: "FELSEFE",
    titleBefore: "Kısıtlama, nihai ",
    titleItalic: "sofistikasyon",
    titleAfter: "dur.",
    body1:
      "Sanat ile işlevsellik arasındaki sınırda çalışıyoruz. Her proje boş bir tuval gibi başlar — ışık, hacim ve malzeme gerçeğinin bir çalışmasıdır. Sürecimiz çıkarıcıdır; modern yaşamın gürültüsünü azaltarak formun özündeki güzelliği ortaya çıkarırız.",
    body2:
      "“Editoryal bakış” ile yönlendirilir; her objeyi bir ifade, her gölgeyi bir anlatı olarak ele alırız.",
    cta: "SÜRECİMİZİ KEŞFEDİN",
    ctaHref: "/hakkimizda",
  },
  {
    id: "2",
    image: "/assets/mainPage/slayt2.jpg",
    cardNum: "02.",
    cardLabel: "UYGULAMA",
    cardQuote:
      "Sahada ölçü, planda netlik — teslim her zaman sözle uyumludur.",
    tag: "HİZMET",
    titleBefore: "Mekânı ",
    titleItalic: "doğru",
    titleAfter: " ölçekte kurgulamak.",
    body1:
      "Konut ve ticari alanlarda uygulama ekipleriyle doğrudan koordinasyon kurar, kritik detayları şantiyede takip ederiz.",
    body2:
      "Malzeme seçiminden iş bitimine kadar şeffaf raporlama; sürprizsiz ilerleyen bir zaman çizelgesi.",
    cta: "HİZMETLERİMİZ",
    ctaHref: "/hizmetler/mimari-proje-uygulamalari",
  },
  {
    id: "3",
    image: "/assets/mainPage/slayt3.jpg",
    cardNum: "03.",
    cardLabel: "IŞIK",
    cardQuote:
      "Doğal ışık, en iyi malzemedir; onu yönlendirmek mimarın işidir.",
    tag: "ATÖLYE",
    titleBefore: "Işığı ",
    titleItalic: "hapseden",
    titleAfter: " değil, yönlendiren mekânlar.",
    body1:
      "Cephe ve kesit çalışmalarında günün farklı saatlerinde ışığın davranışını modelleriz; konfor ve enerji dengesini birlikte kurarız.",
    body2:
      "İç mekânda yansımalar, gölgeler ve malzeme dokuları ile sessiz bir ritim oluştururuz.",
    cta: "PROJELER",
    ctaHref: "/projeler",
  },
  {
    id: "4",
    image: "/assets/mainPage/slayt4.jpg",
    cardNum: "04.",
    cardLabel: "MALZEME",
    cardQuote: "Dokunuş hissi, göze değil ele hitap eder.",
    tag: "MALZEME",
    titleBefore: "Zamanla güzelleşen ",
    titleItalic: "dokular",
    titleAfter: " seçeriz.",
    body1:
      "Dayanıklılık ve estetiği bir arada tutan yüzeyler; doğal taş, ahşap ve metal detaylarda incelikli bir palet.",
    body2:
      "Her örneklemeyi sahada test eder, yaşam döngüsü boyunca rengini ve dokusunu koruyan çözümler tercih ederiz.",
    cta: "İLETİŞİM",
    ctaHref: "/iletisim",
  },
  {
    id: "5",
    image: "/assets/mainPage/slayt1.jpg",
    cardNum: "05.",
    cardLabel: "BİRLİKTE",
    cardQuote: "İyi mimarlık, dinleyerek başlar.",
    tag: "ORTAKLIK",
    titleBefore: "Sizin ritminize ",
    titleItalic: "uyumlu",
    titleAfter: " projeler.",
    body1:
      "İhtiyaç analizinden anahtar teslime kadar yanınızdayız; karar noktalarında net seçenekler, uygulamada tutarlı kalite.",
    body2:
      "Her proje için net iletişim ve sürdürülebilir iş ortaklığı sunuyoruz.",
    cta: "BİZE ULAŞIN",
    ctaHref: "/iletisim",
  },
];

/** Önceki tek blok görsel yüksekliğinin yaklaşık yarısı */
const IMG_HEIGHT =
  "h-[clamp(197px,48.75vw,282px)] sm:h-[clamp(253px,45vh,357px)] lg:h-[min(49.25vh,394px)] lg:min-h-[282px]";

export default function ServicesScrollSection() {
  return (
    <section
      className="w-full bg-pageBg px-4 py-10 sm:px-6 lg:px-10 lg:py-14"
      aria-label="Hizmetler"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        {SLIDES.map((slide, i) => {
          const imageRight = i % 2 === 1;

          return (
            <article
              key={slide.id}
              className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center lg:gap-8 xl:gap-10"
            >
              <div
                className={`relative mx-auto w-full max-w-xl lg:mx-0 ${imageRight ? "lg:order-2 lg:justify-self-end" : "lg:justify-self-start"}`}
              >
                <div
                  className={`relative w-full overflow-hidden rounded-2xl shadow-lg shadow-navy/10 ${IMG_HEIGHT}`}
                >
                  <Image
                    src={slide.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={i === 0}
                  />
                </div>
                <div className="absolute -right-1 top-3 max-w-[min(100%,200px)] rounded-xl border border-navy/10 bg-pageBgSecondary p-3 shadow-lg shadow-navy/10 sm:right-3 sm:top-4 sm:max-w-[220px] sm:p-4">
                  <p className="font-main text-2xl leading-none text-navy sm:text-3xl">
                    {slide.cardNum}
                  </p>
                  <p className="mt-1.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.15em] text-navy/80 sm:text-[0.65rem]">
                    {slide.cardLabel}
                  </p>
                  <p className="mt-2 font-sans text-xs leading-snug text-text sm:text-sm">
                    {slide.cardQuote}
                  </p>
                </div>
              </div>

              <div
                className={`flex flex-col justify-center ${imageRight ? "lg:order-1" : ""}`}
              >
                <span className="inline-flex w-fit rounded-pill border border-navy/25 px-3 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-navy">
                  {slide.tag}
                </span>
                <h2 className="mt-4 font-main text-2xl leading-tight text-navy sm:mt-5 sm:text-3xl lg:text-[2rem] xl:text-[2.35rem]">
                  {slide.titleBefore}
                  <em className="italic text-navy">{slide.titleItalic}</em>
                  {slide.titleAfter}
                </h2>
                <p className="mt-4 font-sans text-sm leading-relaxed text-text sm:mt-5 sm:text-base">
                  {slide.body1}
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-muted sm:text-base">
                  {slide.body2}
                </p>
                <div className="mt-6 border-t border-navy/15 pt-5 sm:mt-8">
                  <Link
                    href={slide.ctaHref}
                    className="inline-block font-sans text-xs font-bold uppercase tracking-[0.14em] text-navy transition-colors duration-nav hover:text-accent"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
