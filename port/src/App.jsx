
import Main from "./components/Main";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";


import "./index.css";
import TimeLine from "./components/TimeLine";
import Nav from "./components/Nav";
import NewAbout from "./components/NewAbout";
import { ChakraProvider } from '@chakra-ui/react'
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
const emotionCache = createCache({
  key: 'emotion-css-cache',
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});
function App() {
  return (
    <CacheProvider value={emotionCache}>

    <ChakraProvider>

    <div className="contain">
      <Nav/>
      <Main />
      {/* <NewAbout/> */}
      <About />
      <Experience />
      <TimeLine/>
     
      <Contact />
    </div>
    </ChakraProvider>
    </CacheProvider>
  );
}

export default App;
