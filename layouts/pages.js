import Head from "next/head";
import pkg from "../package";
import { MainContext } from "../components/Context/MainContext";

export default ({ children }) => (
  <MainContext.Consumer>
    {stateData => {
      const { theme } = stateData.state;
      return (
        <main style={{ minHeight: "100vh" }} className={theme}>
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
            <meta name="keywords" content={pkg.keywords.join(", ")} />
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
                  "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
              }
              :root {
                --bg-color-light: #fff;
                --bg-color-dark: #000;
                --main-text-color-light: #fff;
                --main-text-color-dark: #000;

                --secondary-text-color: #ababab;
                --avatar-border: none;
              }
              @media (prefer-color-scheme: dark) {
                :root {
                  --bg-color-dark: #000;
                  --main-text-color-light: #fff;
                  --secondary-text-color: #d2d2d2;
                  --avatar-border: 1px solid #fff;
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
            `}
          </style>
        </main>
      );
    }}
  </MainContext.Consumer>
);
