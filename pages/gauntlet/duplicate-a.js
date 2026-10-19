import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Parcours Noyaru : duplicate-a, titre unique pour le test</title>
        <meta name="description" content="Page duplicate-a du parcours d'obstacles : correcte partout sauf sur ce point precis, afin que seule la famille des doublons de meta description se declenche" />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Parcours Noyaru : duplicate-a, titre unique pour le test" />
        <meta property="og:description" content="Page duplicate-a du parcours d'obstacles : correcte partout sauf sur ce point precis, afin que seule la famille des doublons de meta description se declenche au crawl." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parcours Noyaru : duplicate-a, titre unique pour le test" />
        <meta name="twitter:description" content="Page duplicate-a du parcours d'obstacles : correcte partout sauf sur ce point precis, afin que seule la famille des doublons de meta description se declenche au crawl." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
