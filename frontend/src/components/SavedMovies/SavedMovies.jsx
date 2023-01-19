import React from 'react';
import styles from './SavedMovies.module.scss';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
    return (
        <section className={styles.savedMovies}>
            <MoviesCardList/>
        </section>
    );
};

export default SavedMovies;