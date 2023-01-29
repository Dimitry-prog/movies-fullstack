import styles from './App.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import {privateRoutes, publicRoutes} from '../../routes/routesConfig';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {checkUserToken} from '../../api/authApi';
import {getUserInfo} from '../../api/mainApi';

function App() {
    const {isAuth} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserInfo({}));
            navigate('/movies');
        }
    }, [isAuth]);

    useEffect(() => {
        dispatch(checkUserToken({}));
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
