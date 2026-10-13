import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-a.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Parcours Noyaru : page jumelle duplicate-b en double titre</title>
        <meta name="description" content="Page jumelle duplicate-b du parcours d'obstacles : elle portait une description identique a duplicate-a pour tester la detection des meta descriptions" />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-b" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Parcours Noyaru : page jumelle duplicate-b en double titre" />
        <meta property="og:description" content="Page jumelle duplicate-b du parcours d'obstacles : elle portait une description identique a duplicate-a pour tester la detection des meta descriptions dupliquees." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-b" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parcours Noyaru : page jumelle duplicate-b en double titre" />
        <meta name="twitter:description" content="Page jumelle duplicate-b du parcours d'obstacles : elle portait une description identique a duplicate-a pour tester la detection des meta descriptions dupliquees." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : duplicate b</h1>
      <p>Cette page du parcours traite le cas « duplicate b ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
