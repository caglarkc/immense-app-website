const TITLES = {
  "mimari-proje-uygulamalari": "Mimari proje uygulamaları",
  "ev-tadilati-dekorasyon": "Ev tadilatı ve dekorasyonu",
  "zemin-uygulamalari": "Zemin uygulamaları",
  "ofis-isyeri-tadilati-dekorasyon": "Ofis işyeri tadilatı ve dekorasyonu",
  "izolasyon-uygulamalari": "İzolasyon uygulamaları",
};

export function generateStaticParams() {
  return Object.keys(TITLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = TITLES[slug] ?? "Hizmet";
  return {
    title: `${title} | CL Mimarlık`,
  };
}

export default async function HizmetDetayPage({ params }) {
  const { slug } = await params;
  const title = TITLES[slug] ?? "Hizmet";

  return (
    <main className="px-6 py-16">
      <h1 className="font-main text-3xl text-navy md:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-muted">Sayfa içeriği yakında eklenecek.</p>
    </main>
  );
}
