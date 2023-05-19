import React from "react";
import classes from './Experience.module.css'
export default function Experience() {
  
  const data = [
    "Full stack development",
    "Infrastructure & IT support",
    "Cloud computing"
  ]

  return (
  <div className={classes.section}>Experience
  <div className={classes.container}>
    <div className={classes.left}>
     <ul>
      {data.map(item => <li>{item}</li>)}
     </ul>
    </div>
    <div className={classes.right}>

    </div>
  </div>

  </div>
  
  )
}
