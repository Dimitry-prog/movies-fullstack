import React from 'react';
import styles from './Login.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';

const Login = () => {
    return (
        <div className={styles.login}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Рады видеть!</h1>
            </header>
            <main>
                <form>
                    <div>
                        <p>E-mail</p>
                        <input type="text" placeholder='Введите вашу почту'/>
                        <span></span>
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input type="text" placeholder='Введите пароль'/>
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