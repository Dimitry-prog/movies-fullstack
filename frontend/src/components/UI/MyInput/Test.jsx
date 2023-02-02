import React from 'react';
import MyInput from './MyInput';
import {initInputs} from '../../../data/initInputs';
import styles from './Test.module.scss';
import useFormValidation from '../../../hooks/useFormvalidation';

const Test = () => {
    const {values, errors, isValid, dirties, handleChange, resetForm} = useFormValidation();

    return (
        <form className={styles.test} noValidate>
            {initInputs.map(input => (
                <MyInput
                    key={input.id}
                    onChange={handleChange}
                    dirtied={dirties[input.name]?.toString()}
                    {...input}
                />
            ))}
        </form>
    );
};

export default Test;