import Head from 'next/head';
import pkg from '../package';

export default ({ children }) => (
  <main style={{ minHeight: '100vh' }}>
  <Head>
    <title>
      {pkg.author} — {pkg.description}
    </title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <meta charSet="utf-8" />
    <meta name="description" content={pkg.description} />
    <meta name="keywords" content={pkg.keywords.join(', ')} />
  </Head>
  {children}
  <style jsx global>
    {`
      * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: -apple-system, system-ui, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      }
      :root {
        --dark: #000;
        --white: #fff;
        --color-light: #fff;
        --color-dark: #000;
        --primary-color: #2d8fd5;
        --grey-1: #ababab;
        --text-white: var(--white);
        --text-dark: var(--dark);
        --bg-color-light: var(--color-light);
        --bg-color-dark: var(--color-dark);
        --main-text-color-light: var(--text-white);
        --main-text-color-dark: var(--color-dark);
        --article-title-color: var(--primary-color);

        --secondary-text-color: var(--grey-1);
        --avatar-border: none;
      }
      @media (prefers-color-scheme: dark) {
        body {
          color: var(--text-white);
        }
        main {
          background-color: var(--bg-color-dark);
        }
        main h1 {
          color: var(--main-text-color-light);
        }

        p {
          color: var(--main-text-color-light);
        }
      }

      @media (prefers-color-scheme: light) {
        body {
          color: var(--text-dark);
        }
        main {
          background-color: var(--bg-color-light);
        }

        main h1 {
          color: var(--main-text-color-dark);
        }
        p {
          color: var(--main-text-color-dark);
        }
      }

      .dark {
        background-color: var(--bg-color-dark);
      }
      .dark h1 {
        color: var(--main-text-color-light);
      }
      .light {
        background-color: var(--bg-color-light);
      }
      .light h1 {
        color: var(--main-text-color-dark);
      }
      a {
        text-decoration: none;
      }
      li {
        list-style: none;
      }
      .blog-content {
        margin-left: auto;
        margin-right: auto;
        max-width: 42rem;
        padding: 2.625rem 1.3125rem;
      }
      .blog-post {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
      }
      article.blog-post h3 {
        font-size: 1.75rem;
        color: var(--article-title-color);
        font-weight: 700;
        cursor: pointer;
      }
    `}
  </style>
</main>
);
