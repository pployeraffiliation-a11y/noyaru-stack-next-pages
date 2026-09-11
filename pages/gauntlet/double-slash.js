import Head from 'next/head';

// FAMILLE VISEE : double_slash_in_url
// lien interne avec une double barre.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Double Slash - Parcours d'obstacles Noyaru</title>
        <meta name="description" content="Page de test pour le parcours d'obstacles Noyaru, illustrant une anomalie spécifique dans l'URL." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/double-slash" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Double Slash - Parcours d'obstacles Noyaru" />
        <meta property="og:description" content="Page de test pour le parcours d'obstacles Noyaru, illustrant une anomalie spécifique dans l'URL." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/double-slash" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Double Slash - Parcours d'obstacles Noyaru" />
        <meta name="twitter:description" content="Page de test pour le parcours d'obstacles Noyaru, illustrant une anomalie spécifique dans l'URL." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="//noyaru-stack-next-pages.netlify.app//a-propos">A propos</a></p>
    </main>
  );
}
