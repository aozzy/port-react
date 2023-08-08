import Main from "./components/Main";

import About from "./components/About";
import Contact from "./components/Contact";

import "./index.css";

import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Navabr from "./components/Navabr";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="contain">
      <Navabr />
      <Main />

      <Divider />

      <About />
      <Divider />
      <Projects />
      <Divider />

      <Timeline />
      <Divider />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
