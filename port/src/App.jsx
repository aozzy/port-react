
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
      
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFAB00" fill-opacity="1" d="M0,256L48,218.7C96,181,192,107,288,80C384,53,480,75,576,101.3C672,128,768,160,864,186.7C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
</svg> */}
  
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
