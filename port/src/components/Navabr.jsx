import React from 'react'
import Lottie from "lottie-react";
import computer from '/computer.json'
import classes from './modules/Navbar.module.css'
import Burger from './Burger'
import Nav from './Nav'
export default function Navabr() {
  

  return (

    <section className={classes.container}>
      <nav className={classes.nav}>
     
       <div className={classes.links}>
       {/* <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/source-code.png" alt="source-code"/> */}
       {/* <Lottie loop={false} animationData={computer} className={classes.lotty}/> */}
       <lord-icon
    src="https://cdn.lordicon.com/pxecqsgb.json"
    trigger="hover"
    colors="primary:#109121,secondary:#ebe6ef"
    style={{width:"65px",height:"65px"}}>
</lord-icon>
       <ul className={classes.navbar}>
        <li className={classes.navItem}>About</li>
        <li className={classes.navItem}>Experience</li>
        <li className={classes.navItem}>Projects</li>
        <li className={classes.navItem}>Contact</li>
       </ul>
       </div>
      <div className={classes.icon}>
     <Nav/>
     
      </div>
      
      </nav>
    </section>


   
  )
}
