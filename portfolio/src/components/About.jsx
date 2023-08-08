import React , {useState} from 'react'
import classes from './modules/About.module.css'
import Lottie from "lottie-react";
import lottie from '/about.json'
import js from '/javascript.json'
import react from '/react.json'
import pyhton from '/python.json'
import github from '/github.json'
import chrome from '/chrome.json'
import hello from '/helloworld.json'
import { Waypoint } from 'react-waypoint';

export default function About () {
 const [renderLottie, setRenderLottie] = useState(false)
  return (
    <section id='about' className={classes.section}>
    
    <div className={classes.container}>
      <Waypoint onEnter={()=>setRenderLottie(true)} />
      <div className={classes.innerContainer}>

      <div className={classes.left}>
        <div className="">

        </div>
       {renderLottie && <Lottie className={classes.lotty} loop={false} animationData={hello} />}
       
      </div>
      <div className={classes.right}>
        <div className={classes.about}>

        <h2 className={classes.title}>About Me</h2>
        
        <p className={classes.description}>
        I am a keen tech enthusiast with experience in cloud computing, IT and infrastructure support and I’m now seeking to develop my career in the Software development industry. To enhance my skills in Software development, I have completed the Software Engineering Immersive course at General Assembly. I continually try to develop my skill set by keeping abreast of new Technology. I’m currently looking for a Junior developer role as a front end or full stack engineer. Please see my Linkedin profile for my previous roles or get in touch to request a full CV.
        </p>
        <a className={classes.btn} href='https://linkedin.com/in/abdi-osman-000' target="_blank">Learn More</a>
        </div>

      

      </div>
      </div>
      <div className={classes.services}>
<div className={classes.skills}>
 <h4 className={classes.heading}>Technical Skills</h4>
 <div className={classes.skillsInner}>
 
  <div className={classes.skillContainer}>
  <Lottie className={classes.icon} animationData={js} loop={true}/>
  <h6 className={classes.subHeading}>JavaScript</h6> 
   
  </div>
  <div className={`${classes.skillContainer} ${classes.topFive}`}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/c-sharp-logo.png" alt="c-sharp-logo"/>
  <h6 className={classes.subHeading}>C#</h6> 
  </div>
  <div className={`${classes.skillContainer} ${classes.topFive}`}>
  <Lottie className={classes.icon} animationData={react} loop={true}/>
  <h6 className={classes.subHeading}>React</h6> 
  </div>
  <div className={`${classes.skillContainer} ${classes.topFive}`}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/typescript.png" alt="typescript"/>
  <h6 className={classes.subHeading}>TypeScript</h6> 
  </div>
  <div className={`${classes.skillContainer} ${classes.topFive}`}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/css3.png" alt="css3"/>
  <h6 className={classes.subHeading}>CSS</h6> 
  </div>
  <div className={`${classes.skillContainer} ${classes.topFive}`}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/django.png" alt="django"/>
  <h6 className={classes.subHeading}>Django</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/redux.png" alt="redux"/>
  <h6 className={classes.subHeading}>Redux</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon}  src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png" alt="external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo"/>
  <h6 className={classes.subHeading}>MongoDB</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/postgreesql.png" alt="postgreesql"/>
  <h6 className={classes.subHeading}>Postgresql</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/sql.png" alt="sql"/>
  <h6 className={classes.subHeading}>Sql</h6>  
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/wired/50/webpack.png" alt="webpack"/>
  <h6 className={classes.subHeading}>Webpack</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/flask.png" alt="flask"/>
  <h6 className={classes.subHeading}>Flask</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>
  <h6 className={classes.subHeading}>Express</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/sass.png" alt="sass"/>
  <h6 className={classes.subHeading}>Sass</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/docker.png" alt="docker"/>
  <h6 className={classes.subHeading}>Docker</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon}  src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/24/external-nginx-accelerates-content-and-application-delivery-improves-security-logo-regular-tal-revivo.png" alt="external-nginx-accelerates-content-and-application-delivery-improves-security-logo-regular-tal-revivo"/>
  <h6 className={classes.subHeading}>Nginx</h6>  
  </div>
  <div className={classes.skillContainer}>
  <Lottie  className={classes.icon} animationData={pyhton} loop={true}/>
  <h6 className={classes.subHeading}>Python</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/html-filetype--v1.png" alt="html-filetype--v1"/>
  <h6 className={classes.subHeading}>HTML</h6> 
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/git.png" alt="git"/>
  <h6 className={classes.subHeading}>Git</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/windows/32/bootstrap.png" alt="bootstrap"/>
  <h6 className={classes.subHeading}>Bootstrap</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/heroku.png" alt="heroku"/>
  <h6 className={classes.subHeading}>Heroku</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/windows/32/npm.png" alt="npm"/>
  <h6 className={classes.subHeading}>NPM</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/material-outlined/48/firebase.png" alt="firebase"/>
  <h6 className={classes.subHeading}>Firebase</h6> 
   
  </div>

 <div className={classes.skillContainer}>
  <Lottie className={classes.icon} animationData={github} loop={true} style={{width:'50px'}}/>
  <h6 className={classes.subHeading}>Github</h6> 
   
  </div> 
  <div className={classes.skillContainer}>
  <img className={classes.icon}src="https://img.icons8.com/ios-filled/50/office-365.png" alt="office-365"/>
  <h6 className={classes.subHeading}>0365</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/wired/64/blender-3d.png" alt="blender-3d"/>
  <h6 className={classes.subHeading}>Blender</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios-filled/50/unreal-engine.png" alt="unreal-engine"/>
  <h6 className={classes.subHeading}>Unreal Engine</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/wired/64/postman-api.png" alt="postman-api"/>
  <h6 className={classes.subHeading}>Postman</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <img className={classes.icon} src="https://img.icons8.com/ios/50/vmware.png" alt="vmware"/>
  <h6 className={classes.subHeading}>VMware</h6> 
   
  </div>
  <div className={classes.skillContainer}>
  <Lottie  className={classes.icon} animationData={chrome} loop={true} style={{width:'50px'}}/>
  <h6 className={classes.subHeading}>Chrome</h6> 
  </div> 
  {/* <div className={classes.skillContainer}>
  <img src="./images/ejs.svg" alt="ejs" />
   
  </div>  */}
 </div>
</div>
<div className={classes.serviceContainer}>
<h4 className={classes.heading}>Services</h4>
 <div className={classes.serviceList}>

    <div className={classes.serviceListItem}><img className={classes.icon} src="https://img.icons8.com/ios/50/laptop-settings--v3.png" alt="laptop-settings--v3"/> Full Stack Development</div>
    <div className={classes.serviceListItem}><img className={classes.icon} src="https://img.icons8.com/external-ddara-lineal-ddara/64/external-client-server-analysis-data-user-sync-network-cloud-computing-ddara-lineal-ddara.png" alt="external-client-server-analysis-data-user-sync-network-cloud-computing-ddara-lineal-ddara"/>IT & Infrastructure Support</div>
    <div className={classes.serviceListItem}><img className={classes.icon} src="https://img.icons8.com/ios-glyphs/60/azure-api-manager.png" alt="azure-api-manager"/>Cloud Computing</div>
    <div className={classes.serviceListItem}><img className={classes.icon} src="https://img.icons8.com/ios/50/cyber-security.png" alt="cyber-security"/>Cyber Security</div>
 </div>


</div>



</div>

    </div>

  </section>
  )
}


