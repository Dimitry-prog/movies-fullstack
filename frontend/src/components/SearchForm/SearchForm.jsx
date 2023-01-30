import React, {useEffect} from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../api/moviesApi';
import useFormValidation from '../../hooks/useFormvalidation';
import {getSearchedMovies, setAmountQueryMovies, setSearchedQuery} from '../../store/moviesSlice';

const SearchForm = ({setQuery}) => {
    const {values, errors, isValid, handleChange} = useFormValidation();
    const {movies, loading, isResponse} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getMovies({}));
        dispatch(setSearchedQuery(values.name));
    };

    useEffect(() => {
        if (isResponse) {
            const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(values.name));
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            dispatch(getSearchedMovies(filteredMovies));
            setQuery(1);
        }
    }, [movies]);

    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}>
            <div className={styles.form__container}>
                <img src={searchIcon} alt="search"/>
                <input
                    value={values.name || ''}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder='Фильм'
                    required/>
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