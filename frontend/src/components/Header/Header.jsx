import React, {useEffect} from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile_icon.svg';
import {Link, NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../../store/modalSlice';

const Header = () => {
    const {isAuth} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <header className={`${styles.header} ${!isAuth ? `${styles.header_hero}` : ''}`}>
            <div className={styles.header__container}>

                {!isAuth && (
                    <>
                        <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>

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
                    </>
                )}

                {isAuth && (
                    <>
                        <Link to='/movies' className={styles.logo}><img src={logo} alt="logo"/></Link>

                        <nav className={styles.header__nav}>
                            <ul className={styles.header__list}>
                                <li className={styles.header__item}>
                                    <NavLink to='/movies'>Фильмы</NavLink>
                                </li>
                                <li className={styles.header__item}>
                                    <NavLink to='/saved-movies'>Сохранённые фильмы</NavLink>
                                </li>
                            </ul>
                            <Link to='/profile' className={styles.profile}>
                                Аккаунт
                                <img src={profileIcon} alt="profile"/>
                            </Link>
                        </nav>
                        <button
                            onClick={() => dispatch(openModal())}
                            type='button'
                            aria-label='burger'
                            className={styles.burger}></button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;