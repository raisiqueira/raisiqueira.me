import Head from "next/head";
import { Component } from "react";
import Typing from "react-typing-animation";
import { MainContext } from "../components/Context/MainContext";

// Components
import Page from "../layouts/pages";
import Avatar from "../components/Avatar";
import Nav from "../components/Nav";
import MoonDark from "../assets/img/moon-outline.svg";
import MoonLight from "../assets/img/moon.svg";

const imgUri = "https://avatars0.githubusercontent.com/u/2914170?s=460&v=4";
// Init of the layout
class Home extends Component {
  render() {
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
      <MainContext.Consumer>
        {stateData => {
          const { theme } = stateData.state;
          const { setTheme } = stateData;
          return (
            <Page>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: 10,
                  position: "relative"
                }}
              >
                {theme === "light" ? (
                  <img
                    src={MoonLight}
                    width={25}
                    height={25}
                    onClick={setTheme}
                  />
                ) : (
                  <img
                    src={MoonDark}
                    width={25}
                    height={25}
                    onClick={setTheme}
                  />
                )}
              </div>
              <div>
                <Avatar url={imgUri} alt="Raí Siqueira" />
                <Typing>
                  <h1>Raí Siqueira</h1>
                </Typing>
                <Typing startDelay={1000}>
                  <h2>front-end engineer and beer lover.</h2>
                </Typing>
                <footer>
                  <Nav />
                </footer>
                <style jsx>
                  {`
                    div {
                      padding: 100px;
                      min-height: 100vh;
                      display: flex;
                      justify-content: flex-end;
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
                      color: var(--secondary-text-color);
                      padding-right: 5px;
                    }
                    a,
                    span {
                      color: var(--secondary-text-color);
                      margin-right: 5px;
                      cursor: pointer;
                    }
                    a:hover,
                    span:hover {
                      color: var(--main-text-color);
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
          );
        }}
      </MainContext.Consumer>
      </>
    );
  }
}

export default Home;
