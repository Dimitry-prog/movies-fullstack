import React from 'react';
import styles from './FavouritesPage.module.scss';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const FavouritesPage = () => {
    return (
        <div className={styles.favourites}>
            <Header/>
            <main>
                <section>
                    <SearchForm/>
                </section>
                <section className={styles.favourites__movies}>
                    <MoviesCardList/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default FavouritesPage;