
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Carousels from "./components/Carousels";
import "./index.css";
import TimeLine from "./components/TimeLine";


function App() {
  return (
    <div className="contain">
      <Main />
      <About />
      <Experience />
      <TimeLine/>
      {/* <Carousels/> */}
      <Contact />
    </div>
  );
}

export default App;
