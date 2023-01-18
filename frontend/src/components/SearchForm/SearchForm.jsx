import React from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
    return (
        <form className={styles.form}>
            <div className={styles.form__container}>
                <img src={searchIcon} alt="search"/>
                <input type="text" placeholder='Фильм'/>
                <button type='submit'>Найти</button>
            </div>
            <div className={styles.form__checkbox}>
                <FilterCheckbox/>
                <p>Короткометражки</p>
            </div>
        </form>
    );
};

export default SearchForm;