import React from "react";

const ThemeContext = React.createContext(false);

const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

export { ThemeConsumer, ThemeProvider };
