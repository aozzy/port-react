import React from 'react'

import classes from './modules/Navbar.module.css'
import Burger from './Burger'
import Nav from './Nav'
export default function Navabr() {
  

  return (

    <section className={classes.container}>
      <nav className={classes.nav}>
     
       <div className={classes.links}>
       <img width="64" height="64" src="https://img.icons8.com/external-flaticons-lineal-flat-icons/64/external-it-support-resume-flaticons-lineal-flat-icons.png" alt="external-it-support-resume-flaticons-lineal-flat-icons"/>
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
