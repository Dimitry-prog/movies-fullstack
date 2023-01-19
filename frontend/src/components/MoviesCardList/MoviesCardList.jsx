import React, {useState} from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {
    const [pageFilms, setPageFilms] = useState(false);

    return (
        <>
            <ul className={styles.cardList}>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
                <li><MoviesCard/></li>
            </ul>
            {pageFilms && (
                <button
                    type='button'
                    aria-label='load more films'
                    className={styles.cardList__load}
                >
                    Ещё
                </button>
            )}
        </>
    );
};

export default MoviesCardList;