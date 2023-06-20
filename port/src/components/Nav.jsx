import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import classes from "./modules/Nav.module.css";

function Nav() {
  const [sidebar, setSidebar] = useState(true);
  const handleSidebar = () => setSidebar(!sidebar);

  return (
    <React.Fragment>
      <div className={classes.navbar}>
        <a href="#" className={classes["menu-bars"]}>
          <FaIcons.FaHamburger
            className={classes.icon}
            onClick={handleSidebar}
          />
        </a>
      </div>

      <nav
        className={
          // sidebar ? `${classes["nav-menu active"]}` : `${classes["nav-menu"]}`
          `${sidebar ? classes["nav-menu active"] :classes["nav-menu"] }`
        }
      >
        <ul className={["nav-menu-items"]}>
          <li className={["navbar-toggle"]}>
            <a href="#" className={classes["menu-bars"]}>
              <AiIcons.AiOutlineClose className={classes.icon} />
            </a>
          </li>
          <li className={classes["nav-text"]}>
            <a href="#">
              {" "}
              <AiIcons.AiFillHome className={classes.icon}/>
              <span>Home</span>
            </a>
            
          </li>
          <li className={classes["nav-text"]}>
            <a href="#">
              {" "}
              <span>About</span>
            </a>
            
          </li>
          <li className={classes["nav-text"]}>
            <a href="#">
              {" "}
              <span>Projects</span>
            </a>
            
          </li>
          <li className={classes["nav-text"]}>
            <a href="#">
              {" "}
              <span>Experience</span>
            </a>
            
          </li>
          <li className={classes["nav-text"]}>
            <a href="#">
              {" "}
              <span>Contact</span>
            </a>
            
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
