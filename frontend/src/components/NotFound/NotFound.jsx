import React from 'react';
import styles from './NotFound.module.scss';
import {Link} from 'react-router-dom';

const NotFound = () => {
    return (
        <main className={styles.notFound}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Link to='/'>Назад</Link>
        </main>
    );
};

export default NotFound;