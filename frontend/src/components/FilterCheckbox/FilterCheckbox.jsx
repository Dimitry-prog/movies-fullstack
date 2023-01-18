import React from 'react';
import styles from './FilterCheckbox.module.scss';

const FilterCheckbox = () => {
    return (
        <label className={styles.filterCheckbox}>
            <input
                className={styles.filterCheckbox__checkbox}
                type="checkbox"
            />
            <div className={styles.filterCheckbox__switch}/>
        </label>
    );
};

export default FilterCheckbox;