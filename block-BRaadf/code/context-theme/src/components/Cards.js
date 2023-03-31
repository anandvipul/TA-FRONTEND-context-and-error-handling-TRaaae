import Card from "./Card";
import { ThemeConsumer } from "./UsableContext/themeContext";

function Cards() {
  return (
    <ThemeConsumer>
      {(isDarkMode) => {
        return (
          <div className="cards_wrap">
            <Card />
            <Card />
            <Card />
          </div>
        );
      }}
    </ThemeConsumer>
  );
}

export default Cards;
