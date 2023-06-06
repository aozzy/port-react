
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Carousels from "./components/Carousels";
import "./index.css";


function App() {
  return (
    <div className="contain">
      <Main />
      <About />
      <Experience />
      {/* <Carousels/> */}
      <Contact />
    </div>
  );
}

export default App;
