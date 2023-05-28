import styled from "styled-components";
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

import "./index.css";

function App() {
  return (
    <div className="container">
      <Main />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
