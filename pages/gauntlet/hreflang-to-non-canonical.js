import Head from 'next/head';

// FAMILLE VISEE : hreflang_to_non_canonical
// hreflang pointant vers une page dont le canonical est ailleurs.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Hreflang vers non-canonical - Parcours d'obstacles Noyaru</title>
        <meta name="description" content="Page de test du parcours d'obstacles Noyaru, mettant en avant un point spécifique pour la famille ciblée." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <link rel="alternate" hreflang="fr" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <link rel="alternate" hreflang="en" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/canonical-other" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Hreflang vers non-canonical - Parcours d'obstacles Noyaru" />
        <meta property="og:description" content="Page de test du parcours d'obstacles Noyaru, mettant en avant un point spécifique pour la famille ciblée." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hreflang vers non-canonical - Parcours d'obstacles Noyaru" />
        <meta name="twitter:description" content="Page de test du parcours d'obstacles Noyaru, mettant en avant un point spécifique pour la famille ciblée." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
