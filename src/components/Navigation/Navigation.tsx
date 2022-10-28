import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const Navigation = () => {
  const { nav_links, nav_links_active, nav_links_inactive } = styles;

  return (
    <ul className={nav_links}>
      <li>
        <NavLink
          to="/"
          className={nav_links_inactive}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/counter"
          className={({ isActive }) =>
            isActive ? nav_links_active : nav_links_inactive
          }
        >
          Counter
        </NavLink>
      </li>
      <li>List</li>
    </ul>
  );
};

export default Navigation;
