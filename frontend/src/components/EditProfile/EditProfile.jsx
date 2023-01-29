import React, {useEffect, useRef} from 'react';
import styles from './EditProfile.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {patchUserInfo} from '../../api/mainApi';
import useFormValidation from '../../hooks/useFormvalidation';
import {Link, useNavigate} from 'react-router-dom';

const EditProfile = () => {
    const {user} = useSelector(state => state.user);
    const {values, errors, isValid, handleChange} = useFormValidation();
    const {success} = useSelector(state => state.user);
    const nameRef = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(patchUserInfo(values));
    }

    useEffect(() => {
        nameRef.current.focus();
    }, []);

    return (
        <section className={styles.profile}>
            <h2>Привет, {user.name}!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Имя</p>
                    <input
                        ref={nameRef}
                        value={values.name || ''}
                        onChange={handleChange}
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <p>E-mail</p>
                    <input
                        value={values.email || ''}
                        onChange={handleChange}
                        name="email"
                        type="email"
                    />
                </div>
                <span></span>
                <button type='submit' aria-label='submit form'>Сохранить</button>
            </form>
            <Link to='/profile'>
                Назад
            </Link>
        </section>
    );
};

export default EditProfile;