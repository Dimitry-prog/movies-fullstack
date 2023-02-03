import React from 'react';
import styles from './MoviesCard.module.scss';
import {IMG_BASE_URL} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {useLocation} from 'react-router-dom';
import {createMovie, deleteMovie} from '../../api/mainApi';

const MoviesCard = ({movie}) => {
    const {nameRU, duration, image, country, director, year, description, trailerLink, nameEN, id} = movie;
    const {favouritesMovie} = useSelector(state => state.favouriteMovies);
    const location = useLocation();
    const dispatch = useDispatch();
    const pathToFavouriteMovies = location.pathname === '/saved-movies';
    const isFavouriteMovie = favouritesMovie.some(movie => Number(movie.movieId) === id);
    const imageUrl = `${IMG_BASE_URL}${image.url}`;
    const favouriteMovieId = movie._id;

    let thumbnailUrl;
    if (!pathToFavouriteMovies) {
        thumbnailUrl = `${IMG_BASE_URL}${image.formats.thumbnail.url}`;
    }

    const createMovieFields = {
        country,
        director,
        duration,
        year,
        description,
        image: imageUrl,
        trailerLink,
        thumbnail: thumbnailUrl,
        nameRU,
        nameEN,
        movieId: String(id),
    };

    const handleDeleteMovie = () => {
        dispatch(deleteMovie(favouriteMovieId));
    };

    const handleToggleFavouriteMovie = () => {
        if (isFavouriteMovie) {
            const idMovie = favouritesMovie.find(movie => Number(movie.movieId) === id)._id;
            dispatch(deleteMovie(idMovie));
        } else {
            dispatch(createMovie(createMovieFields));
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.card__left}>
                <h3>{nameRU}</h3>
                <p>{duration}</p>

                {pathToFavouriteMovies
                    ? (
                        <button
                            onClick={handleDeleteMovie}
                            type='button'
                            aria-label='like'
                            className={`${styles['saved']}`}
                        ></button>
                    ) : (
                        <button
                            onClick={handleToggleFavouriteMovie}
                            type='button'
                            aria-label='delete'
                            className={`${!isFavouriteMovie ? `` : `${styles['active']}`}`}
                        ></button>
                    )}
            </div>
            <img src={!pathToFavouriteMovies ? imageUrl : image} alt={nameRU}/>
        </div>
    );
};

export default MoviesCard;