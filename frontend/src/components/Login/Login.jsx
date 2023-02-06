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
    const {values, isValid, handleChange, dirties, resetForm} = useFormValidation();
    const {error: authError, loading} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const loginInputs = initInputs.slice(1, 3);

    const request = (url, options) => {
        return fetch(url, options).then(getResponseData)
    }

    const getResponseData = (res) => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    export const authorizeUser = (email, password) => {
        return request(`${BASE_URL}/signin`,
            {
                method: 'POST',
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        authorizeUser(values.email, values.password).then(res => console.log(res));
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
                        <button type='submit' disabled={!isValid} aria-label='submit form'>
                            {loading ? 'Выполняем вход' : 'Войти'}
                        </button>
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