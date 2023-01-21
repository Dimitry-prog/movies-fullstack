import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <h1>Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </section>
    );
};

export default Hero;