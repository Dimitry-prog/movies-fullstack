import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile_icon.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    const isAuth = false;
    // const isAuth = true;

    return (
        <header className={`${styles.header} ${!isAuth ? `${styles.header_hero}` : ''}`}>
            <div className={styles.header__container}>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>

                {!isAuth && (
                    <nav className={styles.header__nav_hero}>
                        <ul className={styles.header__list_hero}>
                            <li className={styles.header__item_hero}>
                                <Link to='/signup'>Регистрация</Link>
                            </li>
                            <li className={`${styles.header__item_hero} ${styles.header__item_hero_signin}`}>
                                <Link to='/signin'>Войти</Link>
                            </li>
                        </ul>
                    </nav>
                )}

                {isAuth && (
                    <>
                        <nav className={styles.header__nav}>
                            <ul className={styles.header__list}>
                                <li className={styles.header__item}>
                                    <NavLink to='/films'>Фильмы</NavLink>
                                </li>
                                <li className={styles.header__item}>
                                    <NavLink to='/favoriute'>Сохранённые фильмы</NavLink>
                                </li>
                            </ul>
                            <Link to='/profile' className={styles.profile}>
                                Аккаунт
                                <img src={profileIcon} alt="profile"/>
                            </Link>
                        </nav>
                        <button type='button' aria-label='burger' className={styles.burger}></button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;