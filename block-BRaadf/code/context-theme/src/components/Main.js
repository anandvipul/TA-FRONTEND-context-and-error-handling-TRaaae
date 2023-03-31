import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { ThemeConsumer } from "./UsableContext/themeContext";

function Main() {
  return (
    <ThemeConsumer>
      {(isDarkMode) => {
        return (
          <>
            <Title text="Text Component" />
            <Paragraph />
            <Title text="Card Component" />
            <Cards />
            <Title text="Banner Component" />
            <Banner />
          </>
        );
      }}
    </ThemeConsumer>
  );
}

export default Main;
