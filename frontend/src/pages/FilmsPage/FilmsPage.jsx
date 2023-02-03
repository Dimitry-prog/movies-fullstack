import React, {useEffect, useState} from 'react';
import styles from './FilmsPage.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';
import {getFavouritesMovies} from '../../api/mainApi';


const FilmsPage = () => {
    const {
        searchedMovies,
        loading,
        isResponse,
        error,
    } = useSelector(state => state.movies);
    const isRenderMovies = !loading && searchedMovies.length !== 0 && error === null;

    // let qtyMovies;

    const [qtyMovies, setQtyMovies] = useState(7);

    const [resize, setResize] = useState(null);
    const [query, setQuery] = useState(qtyMovies);
    const queriedArray = searchedMovies.slice(0, query);
    const dispatch = useDispatch();
    console.log('query', query)
    // console.log(qtyMovies)
    const handleQuery = () => {
        setQuery(prev => prev + qtyMovies);
    }

    useEffect(() => {
        const handleResize = () => setResize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {


        console.log('qtyMovies', qtyMovies);
        console.log('resize', resize)
        if (resize > 770) {
            setQtyMovies(7);
            setQuery(7);
        }
        if (resize < 770) {
            setQtyMovies(5);
            setQuery(5);
        }
        if (resize < 550) {
            setQtyMovies(3);
            setQuery(3);
        }
    }, [resize, setQuery]);

    // useEffect(() => {
    //     if (resize > 770) {
    //         // qtyMovies = 7;
    //         setQtyMovies(7);
    //     }
    //     if (resize < 770) {
    //         // qtyMovies = 5;
    //         setQtyMovies(5);
    //     }
    //     if (resize < 550) {
    //         // qtyMovies = 3;
    //         setQtyMovies(3);
    //     }
    // }, [resize, qtyMovies]);
    useEffect(() => {
        dispatch(getFavouritesMovies({}));
    }, []);
    return (
        <div className={styles.films}>
            <Header/>
            <main>
                <section className={styles.films__form}>
                    <SearchForm setQuery={setQuery}/>
                </section>

                {loading && <Loader/>}

                {searchedMovies.length === 0 && isResponse && !loading && (
                    <p className={styles.films__noresult}>Ничего не найдено</p>
                )}

                {error !== null && !loading && (
                    <p className={styles.films__error}>Во время запроса произошла ошибка. Возможно, проблема с
                        соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
                )}
                {/*<MoviesCardList movies={movies}/>*/}
                {isRenderMovies && (
                    <section className={styles.films__movies}>
                        <MoviesCardList movies={queriedArray}/>
                        {queriedArray.length !== searchedMovies.length && (
                            <button
                                // onClick={() => setQuery(prev => prev + 7)}
                                onClick={handleQuery}
                                type='button'
                                aria-label='load more films'
                                className={styles.films__load}
                            >
                                Ещё
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