import React from 'react'
import classes from './modules/NewAbout.module.css'
import 'animate.css';
import Lottie from "lottie-react";
import lottie from '/about.json'
import Skills from './Skills';
function NewAbout() {
  return (
    <section className={classes['section-about']}>
   <div className={classes.container}>


<div className={classes.left}>
hello
</div>

<div className={classes.right}>
goodbye
</div>



    {/* <div className={`${classes['grid-item']} ${classes['grid-item-1']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-2']}`}> <h3>About me</h3></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-3']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-4']}`}>
    <h3>Skills</h3>
    </div>
    <div className={`${classes['grid-item']} ${classes['grid-item-5']}`}>
    <Lottie loop={false} animationData={lottie} style={{width:'600px'}}/>
    </div>
    <div className={`${classes['grid-item']} ${classes['grid-item-6']}`}>
    
    </div>
    <div className={`${classes['grid-item']} ${classes['grid-item-7']}`}></div>
    <div className={`${classes['grid-item']} ${classes['grid-item-8']}`}>
      <p>
      I am a keen tech enthusiast with experience in cloud computing, IT and infrastructure support and I’m now seeking to develop my career in the Software development industry. To enhance my skills in Software development, I have completed the Software Engineering Immersive course at General Assembly. I continually try to develop my skill set by keeping abreast of new Technology. I’m currently looking for a Junior developer role as a front end or full stack engineer. Please see my Linkedin profile for my previous roles or get in touch to request a full CV.
      </p>
    </div>
    <div className={`${classes['grid-item']} ${classes['grid-item-9']}`}></div>
    */}
   </div>
    </section>
  )
}

export default NewAbout