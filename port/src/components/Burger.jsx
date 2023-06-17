import React from 'react'
import { push as Menu } from 'react-burger-menu'

export default function Burger() {
  function showSettings (e) {
    e.preventDefault();
   
  }
  return (
    <div id='outer-container'>

    <Menu pageWrapId='page-wrap'>
      <main id='page-wrap'>

    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/about">About</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
    <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
      </main>
  </Menu>
    </div>
  )
}
