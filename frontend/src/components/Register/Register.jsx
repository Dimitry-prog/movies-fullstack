import React from 'react';
import styles from './Register.module.scss';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

const Register = () => {
    return (
        <div className={styles.register}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Добро пожаловать!</h1>
            </header>
            <main>
                <form>
                    <div>
                        <p>Имя</p>
                        <input type="text" placeholder='Введите ваше имя'/>
                        <span></span>
                    </div>
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
                    <button type='submit'>Зарегистрироваться</button>
                </form>
                <div className={styles.register__signin}>
                    <p>Уже зарегистрированы?</p>
                    <Link to='/signin'>Войти</Link>
                </div>
            </main>
        </div>
    );
};

export default Register;