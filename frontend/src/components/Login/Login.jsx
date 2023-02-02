import React, {useEffect} from 'react';
import styles from './Login.module.scss';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../images/logo.svg';
import {useDispatch, useSelector} from 'react-redux';
import useFormValidation from '../../hooks/useFormvalidation';
import {loginUser} from '../../api/authApi';
import {getMovies} from '../../api/moviesApi';
import {setSearchedQuery} from '../../store/moviesSlice';
import {initInputs} from '../../data/initInputs';
import MyInput from '../UI/MyInput/MyInput';

const Login = () => {
    const {values, errors, isValid, handleChange, dirties, resetForm, setErrors} = useFormValidation();
    const {error: authError} = useSelector(state => state.auth);
    const dispatch = useDispatch()
    // console.log('values', values);
    // console.log('errors', errors);
    // console.log('isValid', isValid);
    const loginInputs = initInputs.slice(1, 3);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(values));
        if (!authError) {
            resetForm();
        }
    }
    return (
        <div className={styles.login}>
            <header>
                <Link to='/' className={styles.logo}><img src={logo} alt="logo"/></Link>
                <h1>Рады видеть!</h1>
            </header>
            <main>
                <form onSubmit={handleSubmit} noValidate>
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
                    {/*        maxLength={30}*/}
                    {/*        required*/}
                    {/*    />*/}
                    {/*    <span>{errors.password}</span>*/}
                    {/*</div>*/}
                    {loginInputs.map(input => (
                        <MyInput key={input.id}
                                 onChange={handleChange}
                                 dirtied={dirties[input.name]?.toString()}
                                 {...input}
                        />
                    ))}
                    <div>
                        {(!isValid && authError) && <span>Вы ввели неправильный логин или пароль.</span>}
                        <button type='submit' disabled={!isValid} aria-label='submit form'>Войти</button>
                    </div>
                </form>
                <div className={styles.login__signup}>
                    <p>Ещё не зарегистрированы?</p>
                    <Link to='/signup'>Регистрация</Link>
                </div>
            </main>
        </div>
    );
};

export default Login;