import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Page de test pour le parcours d'obstacles Noyaru</title>
        <meta name="description" content="Page du parcours d'obstacles : elle sert à provoquer UNE anomalie et une seule." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Deux pages qui portent exactement le meme titre pour le test" />
        <meta property="og:description" content="Page du parcours d'obstacles : elle sert à provoquer UNE anomalie et une seule." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deux pages qui portent exactement le meme titre pour le test" />
        <meta name="twitter:description" content="Page du parcours d'obstacles : elle sert à provoquer UNE anomalie et une seule." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles</h1>
      <p>Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
