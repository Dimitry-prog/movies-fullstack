import React from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => {
    return (
        <div className={styles.profile}>
            <Header/>
            <Profile/>
        </div>
    );
};

export default ProfilePage;