import styled from 'styled-components'
import Main from './components/Main'
import  Experience  from './components/Experience'
import About  from './components/About'
import Contact from './components/Contact'
import ThreeModel from './components/ThreeModel'

import './index.css'


function App() {
 

  return (
   
      <div className='container'>
     

      <Main/>
      <About/>
      <Experience/>
      <Contact/>
      <ThreeModel/>
      </div>
    
  )
}

export default App
