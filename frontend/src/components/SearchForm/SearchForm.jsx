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
    const [checked, setChecked] = useState(false);
    console.log(errors)

    console.log(movies)
    console.log(values)
    const handleToggleCheckbox = () => {
        setChecked(!checked);
    }
    console.log(checked)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.keys(values).length || !isValid) {
            setErrors({
                search: 'Строка не может быть пустой'
            });
            inputRef.current.setAttribute('dirtied', true);
        } else {
            dispatch(getMovies({}));
            dispatch(setSearchedQuery(values.search));
        }
    };

    useEffect(() => {
        if (isResponse) {

            const filteredMovies = movies.filter(movie => movie.nameRU.toLowerCase().includes(values.search));
            localStorage.setItem('searchedMovies', JSON.stringify(filteredMovies));
            dispatch(getSearchedMovies(filteredMovies));
            setQuery(1);

            const obj = {
                filteredMovies,
                checked,
                query: values.search
            }
            localStorage.setItem('test', JSON.stringify(obj));
        }
    }, [movies]);

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
                    {searchInput.map(input => (
                        <MyInput
                            likeRef={inputRef}
                            key={input.id}
                            onChange={handleChange}
                            dirtied={dirties[input.name]?.toString()}
                            {...input}
                            myClass={styles.search}
                        />
                    ))}
                    <button type='submit' aria-label='submit'>Найти</button>
                </div>
                {!isValid && <span>{errors.search}</span>}
            </div>
            <div className={styles.form__checkbox}>
                <FilterCheckbox
                    onChange={handleToggleCheckbox}
                />
                <p>Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;