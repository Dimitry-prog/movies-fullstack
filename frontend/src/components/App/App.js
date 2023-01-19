import styles from './App.module.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Techs from '../Techs/Techs';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import AuthTemplate from '../AuthTemplate/AuthTemplate';


function App() {
    return (
        <div className={styles.app}>
            {/*<Header/>*/}
            {/*<Home/>*/}
            {/*<SearchForm/>*/}
            {/*<MoviesCardList/>*/}
            {/*<SavedMovies/>*/}
            {/*<Footer/>*/}
            {/*<Profile/>*/}
            <AuthTemplate/>
        </div>
    );
}

export default App;
