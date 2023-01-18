import styles from './App.module.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
