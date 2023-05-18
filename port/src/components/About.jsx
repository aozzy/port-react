import React from 'react'
import classes from './About.module.css'

export default function About () {
  
  return (
    <div className={classes.section}>
    
    <div className={classes.container}>
      <div className={classes.left}>
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>Hi, my name is</h1>
        <h2 className={classes.subtitle}>Abdi Osman</h2>
        <h2 className={classes.subtitle}>I build things for the web</h2>
        <p className={classes.description}>I'm a Software Engineer that welcomes challenges and architects solutions.</p>
        <button className={classes.btn}>Learn More</button>
       
      </div>
    </div>

  </div>
  )
}
