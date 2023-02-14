import React from 'react';
import styles from './Sidebar.module.scss';
import {Link, NavLink} from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';
import {useDispatch, useSelector} from 'react-redux';
import {closeModal} from '../../store/modalSlice';

const Sidebar = () => {
    const {isOpen} = useSelector(state => state.modal);
    const dispatch = useDispatch();

    return (
        <aside className={`${styles.sidebar} ${isOpen ? `${styles['open']}` : ''}`}>
            <div className={`${isOpen ? `${styles['open']}` : ''}`}>
                <button
                    onClick={() => dispatch(closeModal())}
                    type='button'></button>
                <nav>
                    <ul>
                        <li
                            onClick={() => dispatch(closeModal())}
                        >
                            <NavLink to='/'>Главная</NavLink>
                        </li>
                        <li
                            onClick={() => dispatch(closeModal())}
                        >
                            <NavLink to='/movies'>Фильмы</NavLink>
                        </li>
                        <li
                            onClick={() => dispatch(closeModal())}
                        >
                            <NavLink to='/saved-movies'>Сохранённые фильмы</NavLink>
                        </li>
                    </ul>
                </nav>
                <Link
                    onClick={() => dispatch(closeModal())}
                    to='/profile' className={styles.profile}>
                    Аккаунт
                    <img src={profileIcon} alt="profile"/>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;