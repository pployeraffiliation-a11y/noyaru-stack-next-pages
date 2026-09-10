import Head from 'next/head';

// FAMILLE VISEE : https_page_has_internal_links_to_http
// lien interne ecrit en http.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Parcours d'obstacles Noyaru - Lien HTTP</title>
        <meta name="description" content="Page de test du parcours d'obstacles Noyaru, présentant un parcours unique pour les utilisateurs." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/link-http" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Parcours d'obstacles Noyaru - Lien HTTP" />
        <meta property="og:description" content="Page de test du parcours d'obstacles Noyaru, présentant un parcours unique pour les utilisateurs." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/link-http" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parcours d'obstacles Noyaru - Lien HTTP" />
        <meta name="twitter:description" content="Page de test du parcours d'obstacles Noyaru, présentant un parcours unique pour les utilisateurs." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
      <p><a href="https://noyaru-stack-next-pages.netlify.app/a-propos">A propos</a></p>
    </main>
  );
}
