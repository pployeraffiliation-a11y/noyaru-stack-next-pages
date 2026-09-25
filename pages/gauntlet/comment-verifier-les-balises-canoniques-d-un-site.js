import Head from 'next/head';

// FAMILLE VISEE : page de contenu editorial
// page correcte sur tous les points, elle explique comment verifier les balises canoniques.

export default function Page() {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width" />
        <title>Comment verifier les balises canoniques d'un site</title>
        <meta name="description" content="Guide pratique pour verifier les balises canoniques d'un site : ou les trouver, comment les lire et quelles erreurs frequentes reperer lors d'un audit." />
        <link rel="canonical" href="https://noyaru-stack-next-pages.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Comment verifier les balises canoniques d'un site" />
        <meta property="og:description" content="Guide pratique pour verifier les balises canoniques d'un site : ou les trouver, comment les lire et quelles erreurs frequentes reperer lors d'un audit." />
        <meta property="og:url" content="https://noyaru-stack-next-pages.netlify.app/gauntlet/comment-verifier-les-balises-canoniques-d-un-site" />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comment verifier les balises canoniques d'un site" />
        <meta name="twitter:description" content="Guide pratique pour verifier les balises canoniques d'un site : ou les trouver, comment les lire et quelles erreurs frequentes reperer lors d'un audit." />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>Comment verifier les balises canoniques d'un site</h1>
      <p>La balise canonique indique aux moteurs de recherche quelle URL doit etre consideree comme la version de reference d'une page. Verifier ces balises evite le contenu duplique et concentre les signaux sur la bonne adresse.</p>
      <h2>Ou trouver la balise</h2>
      <p>La balise se place dans la section head du document sous la forme d'un element link avec l'attribut rel canonical. Ouvre le code source d'une page et cherche cette ligne : l'URL indiquee dans l'attribut href est la version canonique declaree.</p>
      <h2>Ce qu'il faut controler</h2>
      <p>Chaque page ne doit contenir qu'une seule balise canonique. L'URL declaree doit etre absolue, renvoyer un code 200 et pointer vers une page reellement indexable. Une page qui se declare elle-meme comme canonique est le cas le plus courant et le plus sain.</p>
      <h2>Erreurs frequentes</h2>
      <p>Les problemes classiques sont une canonique pointant vers une page en 404, une canonique vers une redirection, une adresse en http alors que le site est en https, ou encore une canonique dupliquee. Ces cas envoient des signaux contradictoires aux robots.</p>
      <h2>Verification a grande echelle</h2>
      <p>Pour un site entier, un outil de crawl parcourt chaque URL et compile les canoniques declarees. On repere alors les pages sans canonique, celles qui se contredisent et celles qui pointent hors du domaine attendu.</p>
      <p><a href="/">Retour a l accueil</a></p>
    </main>
  );
}
