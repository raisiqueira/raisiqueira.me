import App, { Container } from "next/app";
import { Provider } from "../components/Context/Provider";

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default MainApp;
