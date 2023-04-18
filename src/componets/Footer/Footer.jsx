import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer>
             <p>Get in touch with me on other platforms</p>
             <Link href="#" className={styles.link}>link</Link>
             <Link href="#" className={styles.link}></Link>
             <Link href="#" className={styles.link}></Link>
             <Link href="#" className={styles.link}></Link>
             <Link href="#" className={styles.link}></Link>
             <Link href="#" className={styles.link}></Link>
        </footer>
    );
};

export default Footer;