import React from 'react'
import Lottie from "lottie-react";
import computer from '/computer.json'
import classes from './modules/Navbar.module.css'

import Nav from './Nav'
export default function Navabr() {
  

  return (

    <section className={classes.container}>
      <nav className={classes.nav}>
     
       <div className={classes.links}>
       
       
       {/* <lord-icon
    src="https://cdn.lordicon.com/myroguwc.json"
    trigger="hover"
    colors="outline:#121331,primary:#3f2b96,secondary:#ebe6ef"
    style={{width:'65px',height:'65px'}}>
</lord-icon> */}

       <lord-icon className={classes.lottie} id={classes["lot"]}
    src="https://cdn.lordicon.com/anihkfxp.json"
    trigger="morph"
    colors="primary:#ffffff,secondary:#45eba5,tertiary:#45eba5"
    style={{width:"55px",height:"55px"}}>
</lord-icon>
       <ul className={classes.navbar}>
        <li className={classes.navItem}> <a href="#about">About</a></li>
        <li className={classes.navItem}><a href="#projects">Projects</a></li>
        <li className={classes.navItem}><a href="#experience">Experience</a></li>
        <li className={classes.navItem}><a href="#contact">Contact</a></li>
       </ul>
       </div>
      <div className={classes.icon}>
     <Nav/>
     
      </div>
      
      </nav>
    </section>


   
  )
}

