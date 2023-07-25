import React from 'react'
import classes from './modules/Footer.module.css'
function Footer() {
  return (
    <React.Fragment>
      <div className={classes.container}>
      <div className={classes.footerItem}>
      <img className={classes.icon} width="50" height="50" src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
       <span>https://github.com/aozzy</span>

      </div>
      <div className={classes.footerItem}>
      <img className={classes.icon} width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
       <span>www.linkedin.com/in/abdi-osman-000</span>

      </div>
      </div>
    </React.Fragment>
  )
}

export default Footer