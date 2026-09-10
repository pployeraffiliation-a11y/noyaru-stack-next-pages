import Head from 'next/head';

const title = 'Blog du site de test Next Pages';
const description = "Index du blog du site fixture Next.js Pages Router, servant a verifier que la correction ne touche pas les autres pages.";
// THE INJECTED DEFECT: the trailing slash. The host serves /blog and 301s /blog/ to it.
const canonical = 'https://noyaru-stack-next-pages.netlify.app/blog';

export default function Page() {
  return (
    <main>
      {/* Pages Router idiom: the <head> is declared with next/head, NOT a metadata export
          (that is App Router) and never with a raw <head> tag. */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://noyaru-stack-next-pages.netlify.app/og.png" />
      </Head>
      <h1>{title}</h1>
      <p>Articles.</p>
      <nav><a href="/">Accueil</a> <a href="/blog">Blog</a> <a href="/a-propos">A propos</a></nav>
    </main>
  );
}
