import Head from 'next/head';
import { Component } from 'react';
import Page from '../layouts/pages';
import Avatar from '../components/Avatar';
import Nav from '../components/Nav';

const imgUri = 'https://avatars0.githubusercontent.com/u/2914170?s=460&v=4';

// Init of the layout
class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <Page>
          <div>
            <Avatar url={imgUri} alt="Raí Siqueira" />
            <h1>Raí Siqueira</h1>
            <h2>front-end engineer and beer lover.</h2>
            <footer>
              <Nav />
            </footer>
            <style jsx>
              {`
                div {
                  padding: 100px;
                  min-height: 100vh;
                  display: flex;
                  justify-content: center;
                  flex-direction: column;
                }
                h2 {
                  color: var(--secondary-text-color);
                  line-height: 30px;
                }
                ul {
                  display: flex;
                  margin-top: 25px;
                }
                li {
                  font-size: 13px;
                  padding-right: 5px;
                }
                a,
                span {
                  margin-right: 5px;
                  cursor: pointer;
                }
                h3 {
                  font-weight: 400;
                  font-size: 14px;
                  color: var(--secondary-text-color);
                  margin-top: 16px;
                }
                h3 a {
                  font-weight: 700;
                  color: var(--main-text-color);
                  margin-right: 0;
                }
                h3 a:hover {
                  text-decoration: underline;
                }
                @media (max-width: 500px) {
                  div {
                    padding: 45px;
                  }
                }
              `}
            </style>
          </div>
        </Page>
      </>
    );
  }
}

export default Home;
