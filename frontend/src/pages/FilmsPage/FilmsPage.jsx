import React, {useState} from 'react';
import styles from './FilmsPage.module.scss';
import SearchForm from '../../components/SearchForm/SearchForm';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader/Loader';

const FilmsPage = () => {
    const {
        searchedMovies,
        loading,
        isResponse,
        error,
    } = useSelector(state => state.movies);
    const isRenderMovies = !loading && searchedMovies.length !== 0 && error === null;
    const [query, setQuery] = useState(1);
    const queriedArray = searchedMovies.slice(0, query);

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

                {isRenderMovies && (
                    <section className={styles.films__movies}>
                        <MoviesCardList movies={queriedArray}/>
                        {queriedArray.length !== searchedMovies.length && (
                            <button
                                onClick={() => setQuery(prev => prev + 1)}
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