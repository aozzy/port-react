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
       
       
       <lord-icon
    src="https://cdn.lordicon.com/myroguwc.json"
    trigger="hover"
    colors="outline:#121331,primary:#3f2b96,secondary:#ebe6ef"
    style={{width:'65px',height:'65px'}}>
</lord-icon>
       {/* <lord-icon
    src="https://cdn.lordicon.com/pxecqsgb.json"
    trigger="hover"
    colors="primary:#109121,secondary:#ebe6ef"
    style={{width:"65px",height:"65px"}}>
</lord-icon> */}
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
