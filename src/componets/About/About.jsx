import React from 'react';
import styles from './about.module.css'

const About = () => {
    return (
        <>
            <div className={styles.contein}>
                <h2 className={styles.title}>Here I write stuff related to computer, anime, movies and what’s happening in my life?</h2>
                <p className={styles.descr}>More about me</p>      
            </div>
        </>
    );
};

export default About;   