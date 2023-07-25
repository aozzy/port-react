import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import { IconContext } from "react-icons";
import classes from "./modules/Nav.module.css";
import '../index.css'


function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <div className={classes.container}>
      <IconContext.Provider value={{color:'#fff'}}>

      <div className={classes.navbar}>
        <a href="#" className={classes["menu-bars"]}>
          <RxIcons.RxHamburgerMenu
            className={classes.icon}
            onClick={handleSidebar}
            />
        </a>
      </div>

      <nav
        className={
          // sidebar ? `${classes["nav-menu_active"]}` : `${classes["nav-menu"]}`
          `${sidebar ? "nav-menu active" : "nav-menu" }`
        }
        >
        <ul className={classes["nav-menu-items"]} onClick={handleSidebar}>
          <li className={classes["navbar-toggle"]}>
            <a href="#" className={classes["menu-bars"]}>
              <AiIcons.AiOutlineClose className={classes.icon} />
            </a>
          </li>
          <li className={`${classes["nav-text"]} ${classes.home}`}>
            <a href="#">
              {" "}
              <AiIcons.AiFillHome className={classes.icon}/>
              <span>Home</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.about}`}>
            <a href="#">
              {" "}
              <span>About</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.projects}`}>
            <a href="#">
              {" "}
              <span>Projects</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.experience}`}>
            <a href='#experience'>
              {" "}
              <span>Experience</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.contact}`}>
            <a href="#">
              {" "}
              <span>Contact</span>
            </a>
            
          </li>
        </ul>
      </nav>
        </IconContext.Provider>
    </div>
  );
}

export default Nav;
