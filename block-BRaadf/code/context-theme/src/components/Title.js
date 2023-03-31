import { ThemeConsumer } from "./UsableContext/themeContext";

function Title({ text }) {
  return (
    <ThemeConsumer>
      {(isDarkMode) => {
        return (
          <h2
            className={`heading ${
              isDarkMode ? "sub-heading-dark" : "sub-heading-light"
            }`}
          >
            {text}
          </h2>
        );
      }}
    </ThemeConsumer>
  );
}

export default Title;
