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
import {setSearchedMovies} from '../../store/moviesSlice';

const SearchForm = () => {
    const {values, handleChange, dirties, setValues, setErrors} = useFormValidation();
    const {movies, loading} = useSelector(state => state.movies);
    const {favouritesMovie} = useSelector(state => state.favouriteMovies);
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [isChecked, setIsChecked] = useState(false);
    const location = useLocation();
    const pathToFavouriteMovies = location.pathname === '/saved-movies';
    const params = JSON.parse(localStorage.getItem('queryParams'));

    const handleSubmitMovies = async (e) => {
        e.preventDefault();
        if (values.search === '') {
            setErrors({
                search: 'Нужно ввести ключевое слово'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            let filteredMovies = [];
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));

            if (!movies.length) {
                const getFilms = await dispatch(getMovies());
                localStorage.setItem('movies', JSON.stringify(getFilms.payload));
                filteredMovies = getFilms.payload.filter(movie => movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()));
                if (!isChecked) {
                    localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
                    dispatch(setSearchedMovies(filteredMovies));
                } else {
                    const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
                    localStorage.setItem('searchedMovies', JSON.stringify(shortMovies));
                    dispatch(setSearchedMovies(shortMovies));
                }
            } else {
                const parseMovies = JSON.parse(localStorage.getItem('movies'));
                filteredMovies = parseMovies.filter(movie => movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()));
                if (!isChecked) {
                    localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
                    dispatch(setSearchedMovies(filteredMovies));
                } else {
                    const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
                    localStorage.setItem('searchedMovies', JSON.stringify(shortMovies));
                    dispatch(setSearchedMovies(shortMovies));
                }
            }
        }
    };

    const handleSubmitFavourites = (e) => {
        e.preventDefault();
        if (values.search === '') {
            setErrors({
                search: 'Нужно ввести ключевое слово'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            dispatch(getFavouritesMovies());
        }
    };

    useEffect(() => {
        const parseMovies = JSON.parse(localStorage.getItem('movies'));
        if (parseMovies && !pathToFavouriteMovies) {
            const filteredMovies = parseMovies.filter(movie => movie.nameRU.toLowerCase().includes(params?.query?.toLowerCase()));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: params?.query,
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));

            if (!isChecked) {
                localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
                dispatch(setSearchedMovies(filteredMovies));
            } else {
                const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
                localStorage.setItem('searchedMovies', JSON.stringify(shortMovies));
                dispatch(setSearchedMovies(shortMovies));
            }
        }
        if (pathToFavouriteMovies) {
            const filteredMovies = favouritesMovie.filter(movie => movie.nameRU.toLowerCase().includes(values.search?.toLowerCase()));

            if (!isChecked) {
                dispatch(setSearchedFavouritesMovies(filteredMovies));
            } else {
                const shortMovies = filteredMovies.filter(movie => movie.duration <= 40);
                dispatch(setSearchedFavouritesMovies(shortMovies));
            }
        }
    }, [favouritesMovie, isChecked]);

    useEffect(() => {
        if (!pathToFavouriteMovies) {
            setValues({
                search: params?.query || '',
            })
            if (params) {
                setIsChecked(params.isChecked);
            } else {
                setIsChecked(false);
            }
        } else {
            setValues({
                search: '',
            })
        }
    }, []);

    useEffect(() => {
        dispatch(getFavouritesMovies());
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
                        pattern="[a-zA-Zа-яА-Я0-9ё\s]{1,}"
                        required
                        dirtied={dirties.search?.toString()}
                        myClass={styles.search}
                        errorMsg='Нужно ввести ключевое слово'
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