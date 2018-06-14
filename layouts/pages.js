import Head from 'next/head';
import pkg from '../package';

export default ({children}) => (
  <main style={{minHeight: '100vh'}}>
    <Head>
      <title>
        {pkg.name} — {pkg.description}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={pkg.description} />
      <meta name="keywords" content={pkg.keywords.join (', ')} />
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
      main {
        background-color: #fff;
      }
      a {
        text-decoration: none;
      }
      li {
        list-style: none;
      }
    `}
    </style>
  </main>
);
