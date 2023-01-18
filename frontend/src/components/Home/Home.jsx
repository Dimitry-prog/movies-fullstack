import React from 'react';
import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Techs from '../Techs/Techs';

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero/>
            <About/>
            <Techs/>
        </main>
    );
};

export default Home;