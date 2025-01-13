import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss'
const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
        <NavLink to='/'>Products</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
        <NavLink to='/favorites'>Favorites</NavLink>
        </div>
      </header>
    );
};

export default Header;