import React, {useState} from 'react';
import styles from './MoviesCard.module.scss';
import {IMG_BASE_URL} from '../../utils/constants';

const MoviesCard = ({movie}) => {
    const [like, setLike] = useState(false);
    const [savedFilm, setSavedFilm] = useState(false);
    // console.log(movie);
    const {nameRU, duration, image} = movie;
    const imageUrl = `${IMG_BASE_URL}${image.url}`;

    return (
        <div className={styles.card}>
            <div className={styles.card__left}>
                <h3>{nameRU}</h3>
                <p>{duration}</p>
                <button
                    onClick={() => setLike(!like)}
                    type='button'
                    aria-label='like'
                    className={`${like ? `${styles['active']}` : ''} ${savedFilm ? `${styles['saved']}` : ``}`}
                ></button>
            </div>
            <img src={imageUrl} alt={nameRU}/>
        </div>
    );
};

export default MoviesCard;