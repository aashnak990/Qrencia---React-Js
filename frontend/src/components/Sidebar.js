import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Sidebar.module.css';
import { FaUsersCog } from "react-icons/fa";

const Sidebar = props => {


  return (<>
    <nav className={classes.sidebar}>
      <ul>
        <li className={classes.list}>
          <NavLink
            to="/student/competitions"
            className={({ isActive }) =>
              isActive ? classes.active : undefined
            }
          >
            <FaUsersCog className={classes.iconStyle} /> <p className={classes.linkText}>Competitions</p>
          </NavLink>
        </li>

      </ul>
    </nav>
  </>
  );
};

export default Sidebar