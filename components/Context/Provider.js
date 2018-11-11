import React, { Component } from "react";
import { MainContext } from "./MainContext";

class Provider extends Component {
  state = {
    theme: "light"
  };

  setTheme = () => {
    this.setState(state => ({
      theme: state.theme === "dark" ? "light" : "dark"
    }));
  };
  render() {
    return (
      <MainContext.Provider
        value={{ state: this.state, setTheme: this.setTheme }}
      >
        {this.props.children}
      </MainContext.Provider>
    );
  }
}

export { Provider };
