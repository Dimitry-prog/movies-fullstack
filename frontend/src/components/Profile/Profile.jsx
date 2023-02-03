import React from 'react';
import styles from './Profile.module.scss';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../api/authApi';

const Profile = () => {
    const {user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser({}));
        localStorage.removeItem('searchedMovies');
        localStorage.removeItem('queryParams');
    }

    return (
        <section className={styles.profile}>
            <h2>Привет, {user.name}!</h2>
            <div className={styles.profile__name}>
                <p>Имя</p>
                <span>{user.name}</span>
            </div>
            <div className={styles.profile__email}>
                <p>E-mail</p>
                <span>{user.email}</span>
            </div>
            <Link to='/edit-profile' className={styles.profile__edit}>Редактировать</Link>
            <Link
                onClick={handleLogout}
                to='/signin'
                className={styles.profile__signout}
            >
                Выйти из аккаунта
            </Link>
        </section>
    );
};

export default Profile;