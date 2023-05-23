import React,{useState} from "react";
import classes from './Experience.module.css'
export default function Experience() {
  
  const data = [
    "Full stack development",
    "Infrastructure & IT support",
    "Cloud computing",
    "Cyber security"
  ]
  const [listItem,setListItem] = useState('projects')
  return (
  <div className={classes.section}>
  <div className={classes.container}>
    <div className={classes.left}>
     <ul className={classes.list}>
      {data.map(item => <li className={classes.item} key={item}>{item}</li>)}
     </ul>
    </div>
    <div className={classes.right}>

    </div>
  </div>

  </div>
  
  )
}
