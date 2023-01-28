import React, {useEffect} from 'react';
import styles from './Register.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {registerUser} from '../../api/authApi';


const Register = () => {
    const {values, errors, isValid, handleChange} = useFormValidation();
    const {loading, error, success} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(values));
    };

    useEffect(() => {
        if (success) {
            navigate('/signin')
        }
    }, [success]);

    return (
        <div className={styles.register}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Добро пожаловать!</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <div>
                        <p>Имя</p>
                        <input
                            value={values.name || ''}
                            onChange={handleChange}
                            name="name"
                            type="text"
                            placeholder='Введите ваше имя'/>
                        <span></span>
                    </div>
                    <div>
                        <p>E-mail</p>
                        <input
                            value={values.email || ''}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder='Введите вашу почту'/>
                        <span></span>
                    </div>
                    <div>
                        <p>Пароль</p>
                        <input
                            value={values.password || ''}
                            onChange={handleChange}
                            name="password"
                            type="password"
                            placeholder='Введите пароль'
                        />
                        <span></span>
                    </div>
                    <button type='submit'>
                        Зарегистрироваться
                    </button>
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