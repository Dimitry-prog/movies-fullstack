import React from 'react';
import styles from './SearchForm.module.scss';
import searchIcon from '../../images/search.svg';

const SearchForm = () => {
    return (
        <form className={styles.form}>
            <img src={searchIcon} alt="search"/>
            <input type="text" placeholder='Фильм'/>
            <button type='submit'>Найти</button>
        </form>
    );
};

export default SearchForm;