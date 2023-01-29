import React from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../api/moviesApi';

const SearchForm = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies({}));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}>
            <div className={styles.form__container}>
                <img src={searchIcon} alt="search"/>
                <input type="text" placeholder='Фильм' required/>
                <button type='submit' aria-label='submit'>Найти</button>
            </div>
            <div className={styles.form__checkbox}>
                <FilterCheckbox/>
                <p>Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;