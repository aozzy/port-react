import styled from 'styled-components'
import Main from './components/Main'
import  Experience  from './components/Experience'
import About  from './components/About'
import Contact from './components/Contact'

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
  background: #a8c0ff;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #3f2b96, #a8c0ff);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #3f2b96, #a8c0ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


`

function App() {
 

  return (
   
      <Container>
     

      <Main/>
      <Experience/>
      <About/>
      <Contact/>
      </Container>
    
  )
}

export default App
