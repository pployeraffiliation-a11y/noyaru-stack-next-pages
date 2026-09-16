import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Page de test unique pour le parcours d'obstacles Noyaru</title>
        <meta name="description" content="Cette page illustre un cas de doublon dans le parcours d'obstacles, avec une description unique pour le test." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Page de test unique pour le parcours d'obstacles Noyaru" />
        <meta property="og:description" content="Deux pages qui portent exactement la meme meta description, afin de declencher la famille des doublons." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Page de test unique pour le parcours d'obstacles Noyaru" />
        <meta name="twitter:description" content="Deux pages qui portent exactement la meme meta description, afin de declencher la famille des doublons." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
