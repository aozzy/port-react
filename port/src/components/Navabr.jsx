import React from 'react'

import classes from './modules/Navbar.module.css'

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
       {/* <img width="48" height="48" src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1"/> */}
       {/* <button className={classes.btn}>Hire Me </button> */}
       
      </div>
      </nav>
    </section>


    // <Section>
    //   <Container>
    //     <Links>
    //     <List>
    //       <ListItem>Home</ListItem>
    //       <ListItem>About</ListItem>
    //       <ListItem>Projects</ListItem>
    //       <ListItem>Contact</ListItem>
    //     </List>
    //     </Links>
    //     <Icons>
    //     <img width="48" height="48" src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1"/>
    //     <Button>Hire Now</Button>
    //     </Icons>
        

    //   Navbar
    //     </Container>
    //   </Section>
  )
}
