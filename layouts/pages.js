import Head from 'next/head';
import pkg from '../package';

export default ({ children }) => (
  <>
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
  <div className="page" style={{ minHeight: '100vh' }}>
    {children}
  </div>
  <style jsx global>
    {`
      * {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
        font-family: -apple-system, system-ui, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;
      }
      code {
        color: #fff;
        border: 1px solid #0d3a58;
        background-color: #193549;
        border-radius: 4px;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        line-height: 1.7;
        color: var(--main-text-color-dark);
      }
      h3 {
        font-size: 1.75rem;
        font-weight: 700;
      }
      ul {
        list-style-type: circle;
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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.7;
          color: var(--main-text-color-light);
        }
        .page {
          background-color: var(--bg-color-dark);
        }
        .page h1 {
          color: var(--main-text-color-light);
        }

        p {
          color: var(--main-text-color-light);
          text-rendering: optimizeLegibility;
        }
      }

      @media (prefers-color-scheme: light) {
        body {
          color: var(--text-dark);
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          line-height: 1.7;
          color: var(--main-text-color-dark);
        }
        .page {
          background-color: var(--bg-color-light);
        }

        .page h1 {
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
        padding: 10px;
      }
      li:before {
        content: '-';
        margin-right: 5px;
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
      .content h2 {
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.7;
      }
      .content p {
        line-height: 2;
        font-size: 1rem;
      }
      .content p a {
        color: var(--primary-color);
        font-weight: bold;
        text-decoration: underline;
      }
      .content pre {
        line-height: 2;
        margin-bottom: 35px;
      }
      .content p code {
        padding: .1em;
      }
      .content img,
      .content .gist,
      .content pre {
        max-width: 100%;
        height: auto;
        margin: 10px 0;
      }
      .content pre {
        padding: 15px;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }
      .content pre,
      .content p code {
        color: #fff;
        border: 1px solid #0d3a58;
        background-color: #193549;
        border-radius: 4px;
      }
      .content blockquote {
        margin-top: 100px;
        margin-bottom: 100px;
        padding-left: 15%;
        color: var(--gray-1);
        font-size: 24px;
      }
      .see-all a {
        color: var(--primary-color);
      }
    `}
  </style>
  </>
);
