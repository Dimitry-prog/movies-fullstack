import HomePage from '../pages/HomePage/HomePage';
import NotFound from '../components/NotFound/NotFound';
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import FavouritesPage from '../pages/FavouritesPage/FavouritesPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import AuthTemplate from '../components/AuthTemplate/AuthTemplate';
import EditProfile from '../components/EditProfile/EditProfile';


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
        path: '/edit-profile',
        component: <EditProfile/>,
    },
    {
        path: '*',
        component: <NotFound/>,
    },
];

export default routesConfig;