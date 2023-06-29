import React from 'react'
import classes from './modules/About.module.css'
import Model from './Model'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Skills from './Skills'
import Lottie from "lottie-react";
import lottie from '/about.json'

// import 'bootstrap/dist/css/bootstrap.min.css';
export default function About () {
  
  return (
    <section className={classes.section}>
    
    <div className={classes.container}>
      <div className={classes.left}>
        <Lottie loop={false} animationData={lottie} style={{width:'800px'}}/>
       
      </div>
      <div className={classes.right}>
        <div className={classes.about}>

        <h2 className={classes.title}>About Me</h2>
        
        <p className={classes.description}>
        I am a keen tech enthusiast with experience in cloud computing, IT and infrastructure support and I’m now seeking to develop my career in the Software development industry. To enhance my skills in Software development, I have completed the Software Engineering Immersive course at General Assembly. I continually try to develop my skill set by keeping abreast of new Technology. I’m currently looking for a Junior developer role as a front end or full stack engineer. Please see my Linkedin profile for my previous roles or get in touch to request a full CV.
        </p>
        <button className={classes.btn}>Learn More</button>
        </div>
        <div className={classes.services}>
          <div className={classes.skills}>
           <h4>Technical Skills</h4>
          </div>
          <div className={classes.service}>

          </div>


      
        </div>
      

      </div>
    </div>

  </section>
  )
}
