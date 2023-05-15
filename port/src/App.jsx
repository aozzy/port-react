import styled from 'styled-components'
import Main from './components/Main'
import  Experience  from './components/Experience'
import About  from './components/About'
import Contact from './components/Contact'

const Container = styled.div`
height: 100vh;
background-color: #2192FF;
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
