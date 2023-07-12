import React , {useState} from 'react'
import classes from './modules/About.module.css'
import Lottie from "lottie-react";
import lottie from '/about.json'
import js from '/javascript.json'
import react from '/react.json'
import pyhton from '/python.json'
import github from '/github.json'
import chrome from '/chrome.json'
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

        <h2 className={classes.title} mb={3}>About Me</h2>
        
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
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>
             
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
            <img width="50" height="50" src="https://img.icons8.com/wired/50/webpack.png" alt="webpack"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/sass.png" alt="sass"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/docker.png" alt="docker"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-nginx-accelerates-content-and-application-delivery-improves-security-logo-regular-tal-revivo.png" alt="external-nginx-accelerates-content-and-application-delivery-improves-security-logo-regular-tal-revivo"/>
             
            </div>
            <div className={classes.skillContainer}>
            <Lottie  animationData={pyhton} loop={true}/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/git.png" alt="git"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/windows/32/bootstrap.png" alt="bootstrap"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/heroku.png" alt="heroku"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/windows/32/npm.png" alt="npm"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="48" height="48" src="https://img.icons8.com/material-outlined/48/firebase.png" alt="firebase"/>
             
            </div>

           <div className={classes.skillContainer}>
            <Lottie  animationData={github} loop={true} style={{width:'50px'}}/>
             
            </div> 
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/office-365.png" alt="office-365"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/wired/64/blender-3d.png" alt="blender-3d"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/unreal-engine.png" alt="unreal-engine"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/wired/64/postman-api.png" alt="postman-api"/>
             
            </div>
            <div className={classes.skillContainer}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/vmware.png" alt="vmware"/>
             
            </div>
            <div className={classes.skillContainer}>
            <Lottie  animationData={chrome} loop={true} style={{width:'50px'}}/>
             
            </div> 
            {/* <div className={classes.skillContainer}>
            <img src="./images/ejs.svg" alt="ejs" />
             
            </div>  */}
           </div>
          </div>
          <div className={classes.serviceContainer}>
          <h4 className={classes.heading}>Services</h4>
            <ul className={classes.serviceList}>
              <li className={classes.serviceListItem}><img width="50" height="50" src="https://img.icons8.com/ios/50/laptop-settings--v3.png" alt="laptop-settings--v3"/> Full Stack Development</li>
              <li className={classes.serviceListItem}><img width="50" height="50" src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-client-server-analysis-data-user-sync-network-cloud-computing-ddara-lineal-ddara.png" alt="external-client-server-analysis-data-user-sync-network-cloud-computing-ddara-lineal-ddara"/>IT & Infrastructure Support</li>
              <li className={classes.serviceListItem}><img width="50" height="50" src="https://img.icons8.com/ios-glyphs/60/azure-api-manager.png" alt="azure-api-manager"/>Cloud Computing</li>
              <li className={classes.serviceListItem}><img width="50" height="50" src="https://img.icons8.com/ios/50/cyber-security.png" alt="cyber-security"/>Cbyber Security</li>

            </ul>
          </div>


      
        </div>
      

      </div>
    </div>

  </section>
  )
}
