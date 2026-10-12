import Head from 'next/head';

// FAMILLE VISEE : duplicate_titles + duplicate_meta_descriptions
// jumelle de duplicate-b : meme titre ET meme description.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Gauntlet Noyaru : page duplicate-a, test de doublons SEO</title>
        <meta name="description" content="Page duplicate-a du parcours d'obstacles Noyaru : jumelle de duplicate-b, elle partage titre et description pour declencher la detection des doublons SEO." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Gauntlet Noyaru : page duplicate-a, test de doublons SEO" />
        <meta property="og:description" content="Page duplicate-a du parcours d'obstacles Noyaru : jumelle de duplicate-b, elle partage titre et description pour declencher la detection des doublons SEO." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/duplicate-a" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gauntlet Noyaru : page duplicate-a, test de doublons SEO" />
        <meta name="twitter:description" content="Page duplicate-a du parcours d'obstacles Noyaru : jumelle de duplicate-b, elle partage titre et description pour declencher la detection des doublons SEO." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : duplicate a</h1>
      <p>Cette page du parcours traite le cas « duplicate a ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
