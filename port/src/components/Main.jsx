import React from 'react'
import classes from './Main.module.css'
import Navbar from './Navabr'
export default function Main() {
  
  return (
    <div className={classes.hero}>
      <Navbar/>
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>Hi, my name is</h1>
          <h2>Abdi Osman</h2>
          <h3>I build things for the web</h3>
          <p>I'm a Software Engineer that welcomes challenges and architects solutions.</p>
        </div>
        <div className={classes.right}></div>
      </div>

    </div>
  )
}
