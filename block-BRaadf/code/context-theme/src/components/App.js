import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { FunctionProvider } from "./UsableContext/functionContext";
import { ThemeProvider } from "./UsableContext/themeContext";

class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    return (
      <ThemeProvider value={this.state.isDarkMode}>
        <FunctionProvider value={this.changeMode}>
          <div
            className={`bg ${this.state.isDarkMode ? "bg-dark" : "bg-light"}`}
          >
            <Header />
            <Main />
            <SwitchButton />
          </div>
        </FunctionProvider>
      </ThemeProvider>
    );
  }
}

export default App;
