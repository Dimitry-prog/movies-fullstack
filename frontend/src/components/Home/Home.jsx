import React from 'react';
import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero/>
            <About/>
            <Techs/>
            <AboutMe/>
        </main>
    );
};

export default Home;