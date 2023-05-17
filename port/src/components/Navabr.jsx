import React from 'react'

import classes from './Navbar.module.css'

export default function Navabr() {
  

  return (

    <div className={classes.container}>
      <div className={classes.nav}>
       <div className={classes.links}>
        logo goes here
       <ul className={classes.navbar}>
        <li className={classes.navItem}>Home</li>
        <li className={classes.navItem}>About</li>
        <li className={classes.navItem}>Projects</li>
        <li className={classes.navItem}>Contact</li>
       </ul>
       </div>
      <div className={classes.icon}>
       <img width="48" height="48" src="https://img.icons8.com/color/48/search--v1.png" alt="search--v1"/>
       <button className={classes.btn}>Hire Me </button>
       
      </div>
      </div>
    </div>


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
