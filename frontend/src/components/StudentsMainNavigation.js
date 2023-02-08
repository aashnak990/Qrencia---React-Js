import { NavLink } from 'react-router-dom';
import logo from '../images/qrencia_logo.jpg';

import classes from './StudentsMainNavigation.module.css';

function StudentsMainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logoSection}>
        <img src={logo} className={classes.logo} alt="qrencia logo" />
      </div>
      <div className={classes.navItemSection}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default StudentsMainNavigation;
