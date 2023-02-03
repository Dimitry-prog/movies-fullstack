import React from 'react';
import styles from './Login.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {loginUser} from '../../api/authApi';
import {initInputs} from '../../data/initInputs';
import MyInput from '../UI/MyInput/MyInput';

const Login = () => {
    const {values, errors, isValid, handleChange, dirties, resetForm, setErrors} = useFormValidation();
    const {error: authError} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const loginInputs = initInputs.slice(1, 3);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(values));
        if (!authError) {
            resetForm();
        }
    }
    return (
        <div className={styles.login}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Рады видеть!</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit} noValidate>
                    {loginInputs.map(input => (
                        <MyInput key={input.id}
                                 onChange={handleChange}
                                 dirtied={dirties[input.name]?.toString()}
                                 {...input}
                        />
                    ))}
                    <div>
                        {(!isValid && authError) && <span>Вы ввели неправильный логин или пароль.</span>}
                        <button type='submit' disabled={!isValid} aria-label='submit form'>Войти</button>
                    </div>
                </form>
                <div className={styles.login__signup}>
                    <p>Ещё не зарегистрированы?</p>
                    <Link to='/signup'>Регистрация</Link>
                </div>
            </main>
        </div>
    );
};

export default Login;