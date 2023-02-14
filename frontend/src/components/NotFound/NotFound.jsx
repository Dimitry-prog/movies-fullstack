import React from 'react';
import styles from './NotFound.module.scss';
import {useNavigate} from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.notFound}>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <button onClick={() => navigate(-1)}>Назад</button>
        </main>
    );
};

export default NotFound;