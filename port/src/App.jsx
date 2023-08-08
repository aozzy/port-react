
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";


import "./index.css";



import Exp from "./components/Exp";
import NewTimeline from "./components/NewTimeline";
import Navabr from "./components/Navabr";
import Footer from "./components/Footer";
import Divider from "./components/Divider";

function App() {
  return (
    

    <div className="contain">
    
      <Navabr/>
      <Main />
      
    <Divider/>
 
      <About />
      <Divider/>
      <Exp/>
      <Divider/>
    
      <NewTimeline/>
      <Divider/>
      
     
      <Contact />
      <Footer/>
    </div>
    
  );
}

export default App;
