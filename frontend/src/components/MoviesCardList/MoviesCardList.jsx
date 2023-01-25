import React, {useState} from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = () => {

    return (
        <ul className={styles.cardList}>
            <li><MoviesCard/></li>
            <li><MoviesCard/></li>
            <li><MoviesCard/></li>
            <li><MoviesCard/></li>
        </ul>
    );
};

export default MoviesCardList;