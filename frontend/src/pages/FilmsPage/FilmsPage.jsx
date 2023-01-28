import React from 'react';
import styles from './FilmsPage.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';

const FilmsPage = () => {
    return (
        <div className={styles.films}>
            <Header/>
            <main>
                <section className={styles.films__form}>
                    <SearchForm/>
                </section>
                <section className={styles.films__movies}>
                    <MoviesCardList/>
                    <button
                        type='button'
                        aria-label='load more films'
                        className={styles.films__load}
                    >
                        Ещё
                    </button>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default FilmsPage;