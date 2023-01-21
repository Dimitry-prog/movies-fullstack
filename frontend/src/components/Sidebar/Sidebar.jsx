import React, {useState} from 'react';
import styles from './Sidebar.module.scss';
import {Link, NavLink} from 'react-router-dom';
import profileIcon from '../../images/profile_icon.svg';

const Sidebar = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState(false);
    // сделал для теста, потом удалю кнопку и пустую обертку
    return (
        <>
            <button onClick={() => setIsOpenSidebar(!isOpenSidebar)}>Check Sidebar</button>
            <aside className={`${styles.sidebar} ${isOpenSidebar ? `${styles['open']}` : ''}`}>
                <div className={`${isOpenSidebar ? `${styles['open']}` : ''}`}>
                    <button
                        onClick={() => setIsOpenSidebar(!isOpenSidebar)}
                        type='button'></button>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to='/movies'>Фильмы</NavLink>
                            </li>
                            <li>
                                <NavLink to='/saved-movies'>Сохранённые фильмы</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Link to='/profile' className={styles.profile}>
                        Аккаунт
                        <img src={profileIcon} alt="profile"/>
                    </Link>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;