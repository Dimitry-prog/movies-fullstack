import React, {useState} from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({movies}) => {

    return (
        <ul className={styles.cardList}>
            {movies.map(movie => (
                <li key={movie.id}>
                    <MoviesCard movie={movie}/>
                </li>
            ))}
        </ul>
    );
};

export default MoviesCardList;