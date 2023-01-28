import React, {useEffect} from 'react';
import styles from './Login.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {loginUser} from '../../api/authApi';

const Login = () => {
    const {values, errors, isValid, handleChange} = useFormValidation();
    const {loading, error, isAuth} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(values));
    };

    return (
        <div className={styles.login}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Рады видеть!</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>E-mail</p>
                        <input
                            value={values.email || ''}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder='Введите вашу почту'/>
                        <span></span>
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input
                            value={values.password || ''}
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder='Введите пароль'
                        />
                        <span></span>
                    </div>
                    <button type='submit'>Войти</button>
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