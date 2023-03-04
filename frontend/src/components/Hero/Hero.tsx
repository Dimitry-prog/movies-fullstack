import React from 'react';
import styles from './Hero.module.scss';
import heroImg from '../../images/hero_icon.svg';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <h1>Учебный проект студента факультета Веб-разработки.</h1>
                <img src={heroImg} alt="hero image"/>
            </div>
        </section>
    );
};

export default Hero;