import React from 'react'
import {HashLink as Link} from "react-router-hash-link";
import styles from  '../components/screns/Home/Header/HeaderTop/HeaderTop.module.css'

const Navbar = () => {
  return (
    <nav>
      <Link to='/#popular' className={styles.menu__list_item}>Booking</Link>
      <Link to='/#provide' className={styles.menu__list_item}>Facilities</Link>
      <Link to='/#discover' className={styles.menu__list_item}>About Us</Link>
      <Link to='/#map' className={styles.menu__list_item}>Location</Link>
      <Link to='/#contact' className={styles.menu__list_item}>Contact</Link>
    </nav>
  )
}

export default Navbar;