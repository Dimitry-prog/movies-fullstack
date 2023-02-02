import React, {useEffect} from 'react';
import styles from './Register.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {registerUser} from '../../api/authApi';
import MyInput from '../UI/MyInput/MyInput';
import {initInputs} from '../../data/initInputs';


const Register = () => {
    const {values, errors, isValid, handleChange, dirties, resetForm} = useFormValidation();
    const {loading, error: authError, success} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(values));
        if (success) {
            resetForm();
        }
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
                <form onSubmit={handleSubmit} noValidate>
                    {/*<div>*/}
                    {/*    <p>Имя</p>*/}
                    {/*    <input*/}
                    {/*        value={values.name || ''}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        name="name"*/}
                    {/*        type="text"*/}
                    {/*        placeholder='Введите ваше имя'*/}
                    {/*        minLength={2}*/}
                    {/*        maxLength={30}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    <span>{errors.name}</span>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <p>E-mail</p>*/}
                    {/*    <input*/}
                    {/*        value={values.email || ''}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        name="email"*/}
                    {/*        type="email"*/}
                    {/*        placeholder='Введите вашу почту'*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    <span>{errors.email}</span>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <p>Пароль</p>*/}
                    {/*    <input*/}
                    {/*        value={values.password || ''}*/}
                    {/*        onChange={handleChange}*/}
                    {/*        name="password"*/}
                    {/*        type="password"*/}
                    {/*        placeholder='Введите пароль'*/}
                    {/*        minLength={3}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    <span>{errors.password}</span>*/}
                    {/*</div>*/}

                    {initInputs.map(input => (
                        <MyInput key={input.id}
                                 onChange={handleChange}
                                 dirtied={dirties[input.name]?.toString()}
                                 {...input}
                        />
                    ))}
                    <div>
                        {authError && <span>{authError}</span>}
                        <button type='submit' disabled={!isValid} aria-label='submit form'>
                            Зарегистрироваться
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