import React, {useState} from 'react';
import styles from './AuthTemplate.module.scss';
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';

const AuthTemplate = () => {
    const [isUserExist, setIsUserExist] = useState(true);

    return (
        <div className={styles.authTemplate}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>{isUserExist ? 'Рады видеть!' : 'Добро пожаловать!'}</h1>
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
                    {isUserExist ? '' : (
                        <div>
                            <p>Пароль</p>
                            <input type="text" placeholder='Введите пароль'/>
                            <span></span>
                        </div>
                    )}
                    <button type='submit'>
                        {isUserExist ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                </form>
                <div className={styles.authTemplate__signin}>
                    <p>
                        {isUserExist ? 'Ещё не зарегистрированы?' : 'Уже зарегистрированы?'}
                    </p>
                    {isUserExist ? <Link to='/signup'>Регистрация</Link> : <Link to='/signin'>Войти</Link>}
                </div>
            </main>
        </div>
    );
};

export default AuthTemplate;