
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";


import "./index.css";
import TimeLine from "./components/TimeLine";
import Nav from "./components/Nav";
import NewAbout from "./components/NewAbout";
import Exp from "./components/Exp";
import NewTimeline from "./components/NewTimeline";
import Navabr from "./components/Navabr";
import Footer from "./components/Footer";

function App() {
  return (
    

    <div className="contain">
      {/* <Nav/> */}
      <Navabr/>
      <Main />
      {/* <NewAbout/> */}
      <About />
      <Exp/>
      {/* <Experience /> */}
      <NewTimeline/>
      {/* <TimeLine/> */}
     
      <Contact />
      <Footer/>
    </div>
    
  );
}

export default App;
