import React from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
    return (
        <section className={styles.cardList}>
            <ul>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
            </ul>
            <button type='button' aria-label='load more films'>
                Ещё
            </button>
        </section>
    );
};

export default MoviesCardList;