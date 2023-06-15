
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";

import "./index.css";
import TimeLine from "./components/TimeLine";


function App() {
  return (
    <div className="contain">
      <Main />
      <About />
      <Experience />
      <TimeLine/>
     
      <Contact />
    </div>
  );
}

export default App;
