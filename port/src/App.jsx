
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";


import "./index.css";
import TimeLine from "./components/TimeLine";
import Nav from "./components/Nav";
import NewAbout from "./components/NewAbout";

function App() {
  return (
    

    <div className="contain">
      <Nav/>
      <Main />
      {/* <NewAbout/> */}
      <About />
      <Experience />
      <TimeLine/>
     
      <Contact />
    </div>
    
  );
}

export default App;
