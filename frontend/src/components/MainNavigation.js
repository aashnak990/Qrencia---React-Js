import { NavLink, useRouteLoaderData } from 'react-router-dom';
import logo from '../images/qrencia_logo.jpg';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  const token = useRouteLoaderData('root');
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
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>
            </li>
            {!token && <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Login
              </NavLink>
            </li>}
            {token && <li>
              <NavLink
                to="/student"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Profile
              </NavLink>
            </li>}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
