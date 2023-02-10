import React from 'react';
import styles from './Register.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {registerUser} from '../../api/authApi';
import MyInput from '../UI/MyInput/MyInput';
import {initInputs} from '../../data/initInputs';

const Register = () => {
    const {values, isValid, handleChange, dirties, resetForm} = useFormValidation();
    const {loading, error: authError} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const registerInput = initInputs.slice(0, 3);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(values))
            .then(res => {
                navigate('/movies');
                resetForm();
            });
    };

    return (
        <div className={styles.register}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Добро пожаловать!</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit} noValidate>
                    {registerInput.map(input => (
                        <MyInput key={input.id}
                                 onChange={handleChange}
                                 dirtied={dirties[input.name]?.toString()}
                                 {...input}
                        />
                    ))}
                    <div>
                        {authError && <span>Что-то пошло не так</span>}
                        <button type='submit' disabled={!isValid} aria-label='submit form'>
                            {loading ? 'Регистрация' : 'Зарегистрироваться'}
                        </button>
                    </div>
                </form>
                <div className={styles.register__signin}>
                    <p>Уже зарегистрированы?</p>
                    <Link to='/signin'>Войти</Link>
                </div>
            </main>
        </div>
    );
};

export default Register;