import Head from 'next/head';

// FAMILLE VISEE : https_page_has_internal_links_to_http
// lien interne ecrit en http.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Page de test du parcours d'obstacles Noyaru - Double Slash</title>
        <meta name="description" content="Découvrez le parcours d'obstacles Noyaru, une expérience unique et captivante pour tous les participants." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/link-http" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Page de test du parcours d'obstacles Noyaru" />
        <meta property="og:description" content="Découvrez le parcours d'obstacles Noyaru, une expérience unique et captivante pour tous les participants." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/link-http" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page de test du parcours d'obstacles Noyaru" />
        <meta name="twitter:description" content="Découvrez le parcours d'obstacles Noyaru, une expérience unique et captivante pour tous les participants." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="http://noyaru-stack-next-pages.netlify.app/a-propos">A propos</a></p>
    </main>
  );
}
