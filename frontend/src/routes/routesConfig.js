import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../components/NotFound/NotFound';
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AuthTemplate from '../components/AuthTemplate/AuthTemplate';


const routesConfig = [
    {
        path: '/signup',
        component: <AuthTemplate isUserExist={false}/>
    },
    {
        path: '/signin',
        component: <AuthTemplate isUserExist={true}/>
    },
    {
        path: '/',
        component: <HomePage/>,
    },
    {
        path: '/movies',
        component: <FilmsPage/>,
    },
    {
        path: '/saved-movies',
        component: <FavouritesPage/>,
    },
    {
        path: '/profile',
        component: <ProfilePage/>,
    },
    {
        path: '*',
        component: <NotFound/>,
    },
];

export default routesConfig;