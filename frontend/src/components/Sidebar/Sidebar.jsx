import React, {useState} from 'react';
import styles from './Sidebar.module.scss';
import {Link} from 'react-router-dom';
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
                                <Link to='/'>Главная</Link>
                            </li>
                            <li>
                                <Link to='/films'>Фильмы</Link>
                            </li>
                            <li>
                                <Link to='/favoriute'>Сохранённые фильмы</Link>
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