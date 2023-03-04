import React from 'react';
import Header from '../../components/Header/Header';
import styles from './HomePage.module.scss';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Techs from '../../components/Techs/Techs';
import AboutMe from '../../components/AboutMe/AboutMe';
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <Hero/>
                <About/>
                <Techs/>
                <AboutMe/>
            </main>
            <Footer/>
        </>
    );
};

export default HomePage;