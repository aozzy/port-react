import React, { useState } from "react";
import classes from "./Experience.module.css";
import Projects from "./Projects";
import Desktop from "./Desktop"
import Skills from './Skills'
import IT from "./IT";
export default function Experience() {
  const data = [
    "Projects",
    "Infrastructure & IT support",
    "Skills"
    
    
  ];
  const [listItem, setListItem] = useState("Projects");
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.left}>
          <ul className={classes.list}>
            {data.map((item) => (
              <li className={classes.item} key={item} onClick={()=> setListItem(item)}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.right}>
          {listItem === "Projects" ? (
            // <Desktop />
            <IT />
            ) : listItem === "Infrastructure & IT support" ? (
            <Projects />
          ) : listItem === "Skills" ? (
            <Skills />
          ) : (
            <h3>Hello</h3>
          )}
        </div>
      </div>
    </div>
  );
}
