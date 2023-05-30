import React from 'react'
import classes from './About.module.css'
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import IT from './IT'
export default function About () {
  
  return (
    <div className={classes.section}>
    
    <div className={classes.container}>
      <div className={classes.left}>
      <Canvas camera={{fov:35,position:[5,5,5]}}> //* to increase zoom change the fov
  
  <OrbitControls enableZoom={false} autoRotate/>
  <ambientLight intensity={2}/>
  <directionalLight position={[1,1,1]}/>
<Model/>
</Canvas>
{/* <IT/> */}

      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>About Me</h1>
        {/* <h2 className={classes.subtitle}>Abdi Osman</h2>
        <h2 className={classes.subtitle}>I build things for the web</h2> */}
        <p className={classes.description}>
        I am a keen tech enthusiast with experience in cloud computing, IT and infrastructure support and I’m now seeking to develop my career in the Software development industry. To enhance my skills in Software development, I have completed the Software Engineering Immersive course at General Assembly. I continually try to develop my skill set by keeping abreast of new Technology. I’m currently looking for a Junior developer role as a front end or full stack engineer. Please see my Linkedin profile for my previous roles or get in touch to request a full CV.
        </p>
        <button className={classes.btn}>Learn More</button>
       
      </div>
    </div>

  </div>
  )
}
