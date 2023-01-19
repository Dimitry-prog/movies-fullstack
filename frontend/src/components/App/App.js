import styles from './App.module.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Techs from '../Techs/Techs';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            {/*<Home/>*/}
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </div>
    );
}

export default App;
