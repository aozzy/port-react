
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";


import "./index.css";

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
      
    <hr/>
  
      <About />
      <hr/>
      <Exp/>
      <hr/>
      {/* <Experience /> */}
      <NewTimeline/>
      <hr/>
      {/* <TimeLine/> */}
     
      <Contact />
      <Footer/>
    </div>
    
  );
}

export default App;
