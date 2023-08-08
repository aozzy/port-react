import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import * as BsIcons from "react-icons/bs"
import * as MdIcons from "react-icons/md"
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
            <a href="#home">
              {" "}
              <AiIcons.AiFillHome className={classes.icon}/>
              <span>Home</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.about}`}>
            <a href="#about">
              {" "}
              <BsIcons.BsFillPersonFill className={classes.icon}/>
              <span>About</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.projects}`}>
            <a href="#projects">
              {" "}
              <BsIcons.BsUiChecks className={classes.icon}/>
              <span>Projects</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.experience}`}>
            <a href='#experience'>
              {" "}
              <MdIcons.MdWorkHistory className={classes.icon}/>
              <span>Experience</span>
            </a>
            
          </li>
          <li className={`${classes["nav-text"]} ${classes.contact}`}>
            <a href="#contact">
              {" "}
              <MdIcons.MdOutlineContactPhone className={classes.icon}/>
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



