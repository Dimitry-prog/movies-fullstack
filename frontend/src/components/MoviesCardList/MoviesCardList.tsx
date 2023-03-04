import React from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';
import {useLocation} from 'react-router-dom';

const MoviesCardList = ({movies}) => {
    const location = useLocation();
    const pathToFavouriteMovies = location.pathname === '/saved-movies';

    return (
        <ul className={styles.cardList}>
            {movies.map(movie => (
                <li key={!pathToFavouriteMovies ? movie.id : movie._id}>
                    <MoviesCard movie={movie}/>
                </li>
            ))}
        </ul>
    );
};

export default MoviesCardList;