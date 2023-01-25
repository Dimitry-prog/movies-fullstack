import React from 'react';
import styles from './Profile.module.scss';
import {Link} from 'react-router-dom';

const Profile = () => {
    return (
        <section className={styles.profile}>
            <h2>Привет, Виталий!</h2>
            <div className={styles.profile__name}>
                <p>Имя</p>
                <span>Виталий</span>
            </div>
            <div className={styles.profile__email}>
                <p>E-mail</p>
                <span>pochta@yandex.ru</span>
            </div>
            <Link to='/edit-profile' className={styles.profile__edit}>Редактировать</Link>
            <Link to='/signout' className={styles.profile__signout}>Выйти из аккаунта</Link>
        </section>
    );
};

export default Profile;