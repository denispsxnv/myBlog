import React from 'react';
import Intro from '../../componets/Intro/Intro';
import About from '../../componets/About/About';
import Subscribe from '../../componets/Subscribe/Subscribe';

const HomePage = () => {
    return (
        <>
            <Intro/>
            <About/>
            <Subscribe/>
        </>
    );
};

export default HomePage;