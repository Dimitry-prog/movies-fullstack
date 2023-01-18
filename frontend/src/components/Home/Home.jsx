import React from 'react';
import styles from './Home.module.scss';
import Hero from '../Hero/Hero';
import About from '../About/About';

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero/>
            <About/>
        </main>
    );
};

export default Home;