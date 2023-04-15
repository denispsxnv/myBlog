import React from 'react';
import styles from './subscribe.module.css'
import { Link } from 'react-router-dom'

const Subscribe = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.contein}>
                <p className={styles.descr}>Would you like to recieve emails of my posts every friday, if yes then consider subscribing</p>
            </div>
            <div className={styles.buttons}>
                <Link to="#" className={styles.link}>Name@domain.com</Link>
                <Link to="#" className={styles.linkSub}>Subscribe</Link>
            </div>
        </div>
    );
};

export default Subscribe;