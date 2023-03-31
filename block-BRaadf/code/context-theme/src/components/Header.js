import { ThemeConsumer } from "./UsableContext/themeContext";

function Header() {
  return (
    <ThemeConsumer>
      {(isDarkMode) => {
        return (
          <h1
            className={`heading ${
              isDarkMode ? "heading-dark" : "heading-light"
            }`}
          >
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </h1>
        );
      }}
    </ThemeConsumer>
  );
}

export default Header;
