import Head from 'next/head';

// FAMILLE VISEE : hreflang_to_non_canonical
// hreflang pointant vers une page dont le canonical est ailleurs.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Test de parcours d'obstacles : hreflang to non canonical</title>
        <meta name="description" content="Cette page traite du cas 'hreflang to non canonical' dans le parcours d'obstacles Noyaru, illustrant une anomalie spécifique pour le test." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <link rel="alternate" hreflang="fr" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <link rel="alternate" hreflang="en" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/canonical-relay" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
        <meta property="og:description" content="Cette page traite du cas 'hreflang to non canonical' dans le parcours d'obstacles Noyaru, illustrant une anomalie spécifique pour le test." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/hreflang-to-non-canonical" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
        <meta name="twitter:description" content="Cette page traite du cas 'hreflang to non canonical' dans le parcours d'obstacles Noyaru, illustrant une anomalie spécifique pour le test." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : hreflang to non canonical</h1>
      <p>Cette page du parcours traite le cas « hreflang to non canonical ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
