import React, {useEffect, useRef} from 'react';
import styles from './EditProfile.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {patchUserInfo} from '../../api/mainApi';
import useFormValidation from '../../hooks/useFormvalidation';
import {Link} from 'react-router-dom';
import MyInput from '../UI/MyInput/MyInput';
import {openInfoTooltip} from '../../store/modalSlice';

const EditProfile = () => {
    const {user} = useSelector(state => state.user);
    const {values, setValues, isValid, dirties, setIsValid, handleChange} = useFormValidation();
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(patchUserInfo(values))
            .then(res => {
                dispatch(openInfoTooltip('Ваши данные успешно сохранены!'))
            });
    };

    useEffect(() => {
        nameRef.current.focus();
        setValues({
            name: user.name,
            email: user.email,
        });
    }, []);

    useEffect(() => {
        if (values.name === user.name && values.email === user.email) {
            nameRef.current.setCustomValidity('Надо изменить данные');
            emailRef.current.setCustomValidity('Надо изменить данные');
            setIsValid(false);
        } else {
            nameRef.current.setCustomValidity("");
            emailRef.current.setCustomValidity("");
            setIsValid(true);
        }
    }, [values, isValid]);

    return (
        <section className={styles.profile}>
            <h2>Привет, {user.name}!</h2>
            <form onSubmit={handleSubmit}>
                <MyInput
                    likeRef={nameRef}
                    value={values.name || ''}
                    onChange={handleChange}
                    name="name"
                    type='text'
                    label='Имя'
                    pattern="^[ёA-Za-zА-Яа-я\s\-]{2,30}"
                    required
                    myClass={styles.edit}
                    dirtied={dirties.name?.toString()}
                    errorMsg='Имя должно отличаться от вашего текущего и поле может содержать только латиницу, кириллицу, пробел или дефис'
                />
                <MyInput
                    likeRef={emailRef}
                    value={values.email || ''}
                    onChange={handleChange}
                    name="email"
                    type='email'
                    label='E-mail'
                    pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$"
                    required
                    myClass={styles.edit}
                    dirtied={dirties.email?.toString()}
                    errorMsg='Это поле должно соответсвовать формату почты, например: example@gmail.com'
                />
                <button type='submit' disabled={!isValid} aria-label='submit form'>Сохранить</button>
            </form>
            <Link to='/profile'>
                Назад
            </Link>
        </section>
    );
};

export default EditProfile;