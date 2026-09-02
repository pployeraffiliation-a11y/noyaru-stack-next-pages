import Head from 'next/head';

const title = 'À propos de Next Pages : découvrez notre site de test complet';
const description = "Découvrez la page À propos de Next Pages, site de test fixture. Présentation complète du projet, de son fonctionnement et de ses objectifs clés.";
const canonical = 'https://noyaru-stack-next-pages.netlify.app/a-propos';

export default function Page() {
  return (
    <main>
      {/* Pages Router idiom: the <head> is declared with next/head, NOT a metadata export
          (that is App Router) and never with a raw <head> tag. */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>{title}</h1>
      <p>Page temoin : elle doit rester intacte apres la correction.</p>
      <nav><a href="/">Accueil</a> <a href="/blog">Blog</a> <a href="/a-propos">A propos</a></nav>
    </main>
  );
}
