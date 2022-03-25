import About from "./components/About";
import CodingTools from "./components/CodingTools";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Social from "./components/Social";
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <CodingTools />
      <Social />
    </>
  );
}

export default App;
