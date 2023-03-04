import styles from './App.module.scss';
import Sidebar from '../Sidebar/Sidebar';
import {privateRoutes, publicRoutes} from '../../routes/routesConfig';
import {Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {checkUserToken} from '../../api/authApi';
import {getUserInfo} from '../../api/mainApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {
    const {isAuth} = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuth) {
            dispatch(getUserInfo());
        }
    }, [isAuth]);

    useEffect(() => {
        dispatch(checkUserToken());
    }, []);

    return (
        <>
            <Sidebar/>
            <InfoTooltip/>
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
