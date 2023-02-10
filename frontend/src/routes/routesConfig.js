import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../components/NotFound/NotFound';
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import EditProfile from '../components/EditProfile/EditProfile';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';

export const publicRoutes = [
    {
        path: '/signup',
        component: <Register/>
    },
    {
        path: '/signin',
        component: <Login/>
    },
    {
        path: '/',
        component: <HomePage/>,
    },
    {
        path: '*',
        component: <NotFound/>,
    },
];

export const privateRoutes = [
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
        path: '/edit-profile',
        component: <EditProfile/>,
    },
    {
        path: '/',
        component: <HomePage/>,
    },
    {
        path: '*',
        component: <NotFound/>,
    },
];
