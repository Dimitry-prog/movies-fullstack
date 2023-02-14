import React from 'react';
import styles from './MyInput.module.scss';

const MyInput = ({label, onChange, errorMsg, myClass, likeRef, disabled, ...inputProps}) => {

    return (
        <div className={`${styles.input} ${myClass}`}>
            <p>{label}</p>
            <input
                ref={likeRef}
                onChange={onChange}
                {...inputProps}
                disabled={disabled}
            />
            <span>{errorMsg}</span>
        </div>
    );
};

export default MyInput;