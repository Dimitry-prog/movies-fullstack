import React from 'react';
import styles from './FilterCheckbox.module.scss';

const FilterCheckbox = ({onChange}) => {

    return (
        <label className={styles.filterCheckbox}>
            <input
                onChange={onChange}
                className={styles.filterCheckbox__checkbox}
                type="checkbox"
            />
            <div className={styles.filterCheckbox__switch}/>
        </label>
    );
};

export default FilterCheckbox;