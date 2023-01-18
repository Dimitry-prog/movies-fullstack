import React from 'react';
import styles from './Home.module.scss';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero/>
        </main>
    );
};

export default Home;