import React, {useEffect, useRef, useState} from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import {useDispatch, useSelector} from 'react-redux';
import {getMovies} from '../../api/moviesApi';
import useFormValidation from '../../hooks/useFormvalidation';
import {getSearchedMovies, setAmountQueryMovies, setMovies, setSearchedQuery} from '../../store/moviesSlice';
import {initInputs} from '../../data/initInputs';
import MyInput from '../UI/MyInput/MyInput';

const SearchForm = ({setQuery}) => {
    const {values, isValid, handleChange, errors, dirties, setValues, setErrors} = useFormValidation();
    const {movies, loading, isResponse, searchedQuery} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const searchInput = initInputs.slice(3);
    const inputRef = useRef(null);
    const [isChecked, setIsChecked] = useState(false);
    // console.log(errors)
    //
    // console.log(movies)
    // console.log(values)
    // console.log('Object.keys(values).length', Object.keys(values).length)
    // const handleToggleCheckbox = () => {
    //     setIsChecked(!isChecked);
    // }
    // console.log(isChecked)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.search === '') {
            setErrors({
                search: 'Строка не может быть пустой'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            dispatch(getMovies({}));
            dispatch(setSearchedQuery(values.search));
        }
    };

    // const params = JSON.parse(localStorage.getItem('queryParams'));
    // console.log('params', params);

    // console.log(values.search)
    useEffect(() => {
        const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(values.search));

        setQuery(1);

        if (isResponse && !isChecked) {
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            dispatch(getSearchedMovies(filteredMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));
        }
        if (isResponse && isChecked) {
            const shortMovies = filteredMovies.filter(movie => movie.duration <= 30);
            localStorage.setItem('searchedMovies', JSON.stringify(shortMovies));
            dispatch(getSearchedMovies(shortMovies));
            const queryParams = {
                filteredMovies,
                isChecked,
                query: values.search
            }
            localStorage.setItem('queryParams', JSON.stringify(queryParams));
        }
    }, [movies, isChecked]);

    useEffect(() => {
        // const params = JSON.parse(localStorage.getItem('queryParams'));
        // console.log('params', params);
        const params = JSON.parse(localStorage.getItem('queryParams'));
        setValues({
            search: params?.query || '',
        })
        setIsChecked(params.isChecked);
    }, []);


    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
            noValidate
        >
            <div className={styles.form__container}>
                <div>
                    <img src={searchIcon} alt="search"/>
                    {/*<input*/}
                    {/*    value={values.name || ''}*/}
                    {/*    onChange={handleChange}*/}
                    {/*    name="name"*/}
                    {/*    type="text"*/}
                    {/*    placeholder='Фильм'*/}
                    {/*    minLength={1}*/}
                    {/*    required*/}
                    {/*/>*/}
                    {/*{searchInput.map(input => (*/}
                    {/*    <MyInput*/}
                    {/*        likeRef={inputRef}*/}
                    {/*        // defaultValue={params?.query || values.search || ''}*/}
                    {/*        key={input.id}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        dirtied={dirties[input.name]?.toString()}*/}
                    {/*        {...input}*/}
                    {/*        myClass={styles.search}*/}
                    {/*    />*/}
                    {/*))}*/}
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
                    <button type='submit' aria-label='submit'>Найти</button>
                </div>
                {/*{!isValid && <span>{errors.search}</span>}*/}
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