import React from 'react'
import styled from 'styled-components'
import classes from './Navbar.module.css'

export default function Navabr() {
  const Section = styled.div`
  display:flex;
  justify-content: center;
`
const Container = styled.div`
width: 1500px;
background-color:rebeccapurple;

`

  return (

    <div className={classes.container}>
      <div className={classes.nav}>
       
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
