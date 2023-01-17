import React from 'react';
import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import profileIcon from '../../images/profile_icon.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/' className={styles.header__logo}><img src={logo} alt="logo"/></Link>
            <nav>
                <ul className={styles.header__list}>
                    <li>
                        <NavLink to='/films'>Фильмы</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favoriute'>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <button>
                    Аккаунт
                    <img src={profileIcon} alt="profile"/>
                </button>
            </nav>
        </header>
    );
};

export default Header;