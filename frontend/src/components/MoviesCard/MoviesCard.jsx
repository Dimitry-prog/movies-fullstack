import React, {useState} from 'react';
import styles from './MoviesCard.module.scss';
import movieImg from '../../images/movieImg.png';

const MoviesCard = () => {
    const [like, setLike] = useState(false);
    const [savedFilm, setSavedFilm] = useState(false);

    return (
        <div className={styles.card}>
            <div className={styles.card__left}>
                <h3>Когда я думаю о Германии ночью</h3>
                <p>1ч 42м</p>
                <button
                    onClick={() => setLike(!like)}
                    type='button'
                    aria-label='like'
                    className={`${like ? `${styles['active']}` : ''} ${savedFilm ? `${styles['saved']}` : ``}`}
                ></button>
            </div>
            <img src={movieImg} alt="Когда я думаю о Германии ночью"/>
        </div>
    );
};

export default MoviesCard;