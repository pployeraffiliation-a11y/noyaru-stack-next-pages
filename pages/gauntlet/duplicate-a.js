import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Parcours d'obstacles — cas duplicate-a, page en doublon</title>
        <meta name="description" content="Parcours d'obstacles, cas duplicate-a : cette page partage son titre avec duplicate-b pour isoler et verifier la detection des doublons de meta." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Parcours d'obstacles — cas duplicate-a, page en doublon" />
        <meta property="og:description" content="Parcours d'obstacles, cas duplicate-a : cette page partage son titre avec duplicate-b pour isoler et verifier la detection des doublons de meta." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parcours d'obstacles — cas duplicate-a, page en doublon" />
        <meta name="twitter:description" content="Parcours d'obstacles, cas duplicate-a : cette page partage son titre avec duplicate-b pour isoler et verifier la detection des doublons de meta." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
