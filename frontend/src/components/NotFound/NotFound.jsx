import React from 'react';
import styles from './NotFound.module.scss';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const NotFound = () => {
    const {isAuth} = useSelector((state) => state.auth);

    return (
        <main className={styles.notFound}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            {isAuth
                ? (
                    <Link to='/movies'>Назад</Link>
                ) : (
                    <Link to='/'>Назад</Link>
                )}
        </main>
    );
};

export default NotFound;