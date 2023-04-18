import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./footer.module.css"
import inImg from "./footer-img1.png"
import footerImg from "./footer-img3.png"
import gitImg from "./git-img2.png"
import youTubeImg from "./footer-img4.png"
import twitterImg from "./tfitter-img5.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
             <p className={styles.title}>Get in touch with me on other platforms</p>
             <Link href="#" className={styles.link}><img src={inImg} alt="" /></Link>
             <Link href="#" className={styles.link}><img src={gitImg} alt="" /></Link>
             <Link href="#" className={styles.link}><img src={footerImg} alt="" /></Link>
             <Link href="#" className={styles.link}><img src={youTubeImg} alt="" /></Link>
             <Link href="#" className={styles.link}><img src={twitterImg} alt="" /></Link>
        </footer>
    );
};

export default Footer;