import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Link to="/" href="" className={styles.link}>Home</Link>
                <Link to="/posts" href="" className={styles.link}>Blog</Link>
                <Link to="/about" href="" className={styles.link}>About me</Link>
            </nav>
        </header>
    );
};

export default Header;