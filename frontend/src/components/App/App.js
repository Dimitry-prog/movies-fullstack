import styles from './App.module.scss';
import Header from '../Header/Header';
import Home from '../Home/Home';


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
