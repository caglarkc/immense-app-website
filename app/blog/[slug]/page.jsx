export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Blog | ${slug} | CL Mimarlık`,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  return (
    <main className="min-h-[50vh] px-6 py-16 lg:px-10">
      <p className="font-sans text-sm uppercase tracking-[0.14em] text-muted">
        Blog
      </p>
      <h1 className="mt-2 font-main text-3xl text-navy md:text-4xl">{slug}</h1>
      <p className="mt-6 max-w-xl font-sans text-muted leading-relaxed">
        Bu sayfa şimdilik yer tutucu. İçerik ve veri bağlantısı daha sonra
        eklenecek.
      </p>
    </main>
  );
}
