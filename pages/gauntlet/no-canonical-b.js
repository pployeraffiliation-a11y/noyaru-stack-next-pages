import Head from 'next/head';

// FAMILLE VISEE : duplicate_pages_without_canonical
// jumelle de no-canonical-a.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Parcours Noyaru : page jumelle B sans canonical declare</title>
        <meta name="description" content="Page B du duo jumeau sans canonical : identique a sa voisine pour provoquer la detection des pages dupliquees sans balise canonique declaree." />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Deux pages jumelles sans canonical declare" />
        <meta property="og:description" content="Page B du duo jumeau sans canonical : identique a sa voisine pour provoquer la detection des pages dupliquees sans balise canonique declaree." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/no-canonical-b" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deux pages jumelles sans canonical declare" />
        <meta name="twitter:description" content="Page B du duo jumeau sans canonical : identique a sa voisine pour provoquer la detection des pages dupliquees sans balise canonique declaree." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Parcours d'obstacles : pages jumelles</h1>
      <p>Cette page du parcours traite le cas « pages jumelles ». Cette page appartient au parcours d'obstacles de la fixture. Elle sert a provoquer UNE anomalie et une seule.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
