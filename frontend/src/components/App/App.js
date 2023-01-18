import styles from './App.module.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import Techs from '../Techs/Techs';


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            {/*<Home/>*/}
            {/*<Footer/>*/}
            <SearchForm/>
            <Techs/>
        </div>
    );
}

export default App;
