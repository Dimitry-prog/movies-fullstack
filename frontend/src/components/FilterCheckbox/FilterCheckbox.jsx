import React from 'react';
import styles from './FilterCheckbox.module.scss';

const FilterCheckbox = ({onChange, isChecked}) => {

    return (
        <label className={styles.filterCheckbox}>
            <input
                onChange={(e) => onChange(e.target.checked)}
                checked={isChecked}
                className={styles.filterCheckbox__checkbox}
                type="checkbox"
            />
            <div className={styles.filterCheckbox__switch}/>
        </label>
    );
};

export default FilterCheckbox;