import React from "react";
import { ThemeConsumer } from "./UsableContext/themeContext";
import { FunctionConsumer } from "./UsableContext/functionContext";

export default function SwitchButton({ isDarkMode, changeMode }) {
  return (
    <ThemeConsumer>
      {(isDarkMode) => {
        return (
          <FunctionConsumer>
            {(changeMode) => {
              return (
                <button
                  className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
                  onClick={changeMode}
                >
                  {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                </button>
              );
            }}
          </FunctionConsumer>
        );
      }}
    </ThemeConsumer>
  );
}
