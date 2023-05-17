import React from 'react'
import classes from './Main.module.css'
import Navbar from './Navabr'
export default function Main() {
  
  return (
    <div className={classes.hero}>
      <Navbar/>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1 className={classes.title}>Hi, my name is</h1>
          <h2 className={classes.subtitle}>Abdi Osman</h2>
          <h2 className={classes.subtitle}>I build things for the web</h2>
          <p className={classes.description}>I'm a Software Engineer that welcomes challenges and architects solutions.</p>
          <button className={classes.btn}>Learn More</button>
        </div>
        <div className={classes.right}>
          <div className={classes.image}>

          <img src="./images/place-holder.jpeg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}
