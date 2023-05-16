import React from 'react'
import styled from 'styled-components'
import Navabr from './Navabr'
export default function Main() {
  const Section = styled.div`
height: 100vh;

scroll-snap-align: center;
`
  return (
    <Section>
      <Navbar/>
      Main

    </Section>
  )
}
