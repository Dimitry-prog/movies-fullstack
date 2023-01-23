import styles from './App.module.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import routesConfig from '../../routes/routesConfig';
import {Route, Routes} from 'react-router-dom';
import Loader from '../Loader/Loader';


function App() {
    return (
        <>
            <Sidebar/>
            <Routes>
                {routesConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </>
    );
}

export default App;
