import React, {useEffect, useState} from 'react';
import styles from './FilmsPage.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {
    BREAKPOINT_DESKTOP,
    QTY_MOVIES_REP_PAGE_ON_DESKTOP,
    QTY_MOVIES_REP_PAGE_ON_MOBILE,
    QTY_MOVIES_REQUEST_ON_DESKTOP, QTY_MOVIES_REQUEST_ON_MOBILE
} from '../../utils/constants';

const FilmsPage = () => {
    const {
        searchedMovies,
        loading,
        isResponse,
        error,
    } = useSelector(state => state.movies);

    const [qtyMovies, setQtyMovies] = useState(QTY_MOVIES_REQUEST_ON_DESKTOP);
    const [resize, setResize] = useState(null);
    const [query, setQuery] = useState(qtyMovies);
    const queriedArray = searchedMovies.slice(0, query);
    const isRenderMovies = !loading && searchedMovies.length !== 0 && error === null;

    const handleQuery = () => {
        setQuery(prev => prev + qtyMovies);
    }

    useEffect(() => {
        const handleResize = () => setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        const timeOut = setTimeout(() => {
            handleResize();
        }, 3000);

        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeOut);
        }
    }, []);

    useEffect(() => {
        if (resize > BREAKPOINT_DESKTOP) {
            setQtyMovies(QTY_MOVIES_REQUEST_ON_DESKTOP);
            setQuery(QTY_MOVIES_REP_PAGE_ON_DESKTOP);
        }
        if (resize < BREAKPOINT_DESKTOP) {
            setQtyMovies(QTY_MOVIES_REQUEST_ON_MOBILE);
            setQuery(QTY_MOVIES_REP_PAGE_ON_MOBILE);
        }
    }, [resize]);

    return (
        <div className={styles.films}>
            <Header/>
            <main>
                <section className={styles.films__form}>
                    <SearchForm/>
                </section>

                {loading && <Loader/>}

                {!searchedMovies.length && isResponse && !loading
                    ? (
                        <p className={styles.films__noresult}>???????????? ???? ??????????????</p>
                    )
                    : !queriedArray.length
                        ? (
                            <p className={styles.films__noresult}>???????????? ???? ??????????????</p>
                        )
                        : ''}

                {error !== null && !loading && (
                    <p className={styles.films__error}>???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ??
                        ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????</p>
                )}

                {isRenderMovies && (
                    <section className={styles.films__movies}>
                        <MoviesCardList
                            movies={queriedArray}
                        />
                        {queriedArray.length !== searchedMovies.length && (
                            <button
                                onClick={handleQuery}
                                type='button'
                                aria-label='load more films'
                                className={styles.films__load}
                            >
                                ??????
                            </button>
                        )}
                    </section>
                )}
            </main>
            <Footer/>
        </div>
    );
};

export default FilmsPage;