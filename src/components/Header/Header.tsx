import React from 'react'
import styles from './Header.module.css'
import NavBarDesktop from './NavBar/NavBarDesktop'
import Webkit from './WebKit/Webkit'

const Header = () => {
  return (
    <>
    <Webkit/>
    <NavBarDesktop/>
    </>
  )
}

export default Header;