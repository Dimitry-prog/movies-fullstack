import styles from './App.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import {privateRoutes, publicRoutes} from '../../routes/routesConfig';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {checkUserToken} from '../../api/authApi';
import {getUserInfo} from '../../api/mainApi';
import {BASE_URL} from '../../utils/constants';

function App() {
    const {isAuth} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserInfo());
            navigate('/movies');
        }
    }, [isAuth]);
    const request = (url, options) => {
        return fetch(url, options).then(getResponseData)
    }
    const getResponseData = (res) => {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }
    const checkUserToken2 = () => {
        return request(`${BASE_URL}/users/me`,
            {
                method: 'GET',
                credentials: 'include',
                mode: 'no-cors',
                headers: {
                    "Content-Type": "application/json",
                }
            });
    }
    useEffect(() => {
        dispatch(checkUserToken());


        checkUserToken2().then(res => {
            console.log(res)
        }).catch(e => console.log(e));
    }, []);

    return (
        <>
            <Sidebar/>
            {isAuth
                ? (
                    <Routes>
                        {privateRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                ) : (
                    <Routes>
                        {publicRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                element={route.component}
                            />
                        ))}
                    </Routes>
                )}
        </>
    );
}

export default App;
