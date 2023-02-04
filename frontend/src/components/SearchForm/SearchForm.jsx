import React, {useEffect, useRef, useState} from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../api/moviesApi';
import useFormValidation from '../../hooks/useFormvalidation';
import MyInput from '../UI/MyInput/MyInput';
import {getFavouritesMovies} from '../../api/mainApi';
import {setSearchedFavouritesMovies} from '../../store/favouriteMoviesSlice';
import {useLocation} from 'react-router-dom';
import {setSearchedMovies, test} from '../../store/moviesSlice';

const SearchForm = () => {
    const {values, handleChange, dirties, setValues, setErrors} = useFormValidation();
    const {movies, loading, isResponse} = useSelector(state => state.movies);
    const {favouritesMovie, isResponse: isResponseFavourites} = useSelector(state => state.favouriteMovies);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [isChecked, setIsChecked] = useState(false);
    const location = useLocation();
    const pathToFavouriteMovies = location.pathname === '/saved-movies';

    const handleSubmitMovies = (e) => {
        e.preventDefault();
        if (values.search === '') {
            setErrors({
                search: 'Строка не может быть пустой'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            dispatch(getMovies({}));
        }
    };

    const handleSubmitFavourites = (e) => {
        e.preventDefault();
        if (values.search === '') {
            setErrors({
                search: 'Строка не может быть пустой'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            dispatch(getFavouritesMovies({}));
        }
    };

    useEffect(() => {
        const filteredMovies = favouritesMovie.filter(movie => movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()));

        if (isResponseFavourites && !isChecked) {
            localStorage.setItem('searchedFavouritesMovies', JSON.stringify(filteredMovies));
            dispatch(setSearchedFavouritesMovies(filteredMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryFavouritesParams', JSON.stringify(queryParams));
        }
        if (isResponseFavourites && isChecked) {
            const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
            localStorage.setItem('searchedFavouritesMovies', JSON.stringify(shortMovies));
            dispatch(setSearchedFavouritesMovies(shortMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryFavouritesParams', JSON.stringify(queryParams));
        }
    }, [favouritesMovie, isChecked]);

    useEffect(() => {
        const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()));

        if (isResponse && !isChecked) {
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            dispatch(setSearchedMovies(filteredMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));
        }
        if (isResponse && isChecked) {
            const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
            localStorage.setItem('searchedMovies', JSON.stringify(shortMovies));
            dispatch(setSearchedMovies(shortMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));
        }
    }, [movies]);

    useEffect(() => {
        let params;
        if (pathToFavouriteMovies) {
            params = JSON.parse(localStorage.getItem('queryFavouritesParams'));
        } else {
            params = JSON.parse(localStorage.getItem('queryParams'));
        }
        setValues({
            search: params?.query || '',
        })
        if (params) {
            setIsChecked(params.isChecked);
        } else {
            setIsChecked(false);
        }

    }, []);

    return (
        <form
            onSubmit={pathToFavouriteMovies ? handleSubmitFavourites : handleSubmitMovies}
            className={styles.form}
            noValidate
        >
            <div className={styles.form__container}>
                <div>
                    <img src={searchIcon} alt="search"/>
                    <MyInput
                        likeRef={inputRef}
                        value={values.search || ''}
                        onChange={handleChange}
                        name='search'
                        type='text'
                        placeholder='Фильм'
                        pattern="[a-zA-Zа-яА-Я0-9\s]{1,}"
                        required
                        dirtied={dirties.search?.toString()}
                        myClass={styles.search}
                        errorMsg='Строка не может быть пустой и содержать символы'
                    />
                    <button type='submit' aria-label='submit'>
                        {loading ? 'Поиск' : 'Найти'}
                    </button>
                </div>
            </div>
            <div className={styles.form__checkbox}>
                <FilterCheckbox
                    isChecked={isChecked}
                    onChange={setIsChecked}
                />
                <p>Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;