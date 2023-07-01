import React , {useState} from 'react'
import classes from './modules/About.module.css'
import Lottie from "lottie-react";
import lottie from '/about.json'
import js from '/javascript.json'
import react from '/react.json'
import pyhton from '/python.json'
import github from '/github.json'
import { Waypoint } from 'react-waypoint';

export default function About () {
 const [renderLottie, setRenderLottie] = useState(false)
  return (
    <section className={classes.section}>
    
    <div className={classes.container}>
      <Waypoint onEnter={()=>setRenderLottie(true)} />
      <div className={classes.left}>
       {renderLottie && <Lottie loop={false} animationData={lottie} style={{width:'700px'}} />}
       
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
           <h4 className={classes.heading}>Technical Skills</h4>
           <div className={classes.skillsInner}>
            <div className={classes.skillContainer}>
            <Lottie animationData={js} loop={true}/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/c-sharp-logo.png" alt="c-sharp-logo"/>
             
            </div>
            <div className={classes.skillContainer}>
            <Lottie  animationData={react} loop={true}/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/typescript.png" alt="typescript"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/django.png" alt="django"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/redux.png" alt="redux"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="35" height="50"  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/sql.png" alt="sql"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="64" height="64" src="https://img.icons8.com/wired/64/webpack.png" alt="webpack"/>
             
            </div>
            <div className={classes.skillContainer}>
            <Lottie  animationData={pyhton} loop={true}/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>
             
            </div>

           <div className={classes.skillContainer}>
            <Lottie  animationData={github} loop={true} style={{width:'50px'}}/>
             
            </div> 
            
           </div>
          </div>
          <div className={classes.service}>

          </div>


      
        </div>
      

      </div>
    </div>

  </section>
  )
}
