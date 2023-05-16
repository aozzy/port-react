import React from 'react'
import styled from 'styled-components'

export default function Navabr() {
  const Section = styled.div`
  display:flex;
  justify-content: center;
`
const Container = styled.div`
width: 1500px;
background-color:rebeccapurple;
text-align:center;
`
  return (
    <Section>
      <Container>
      Navbar
        </Container>
      </Section>
  )
}
