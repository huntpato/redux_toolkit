import React from 'react'
import Navigation from './Navigation'
import styles from "./NavBar.module.css";

const NavBar = () => {

  const { nav_container } = styles; 

  return (
    <nav className={nav_container}>
        <Navigation/>
    </nav>
  )
}

export default NavBar