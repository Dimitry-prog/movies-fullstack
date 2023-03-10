import React from 'react';
import styles from './FavouritesPage.module.scss';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useSelector} from 'react-redux';

const FavouritesPage = () => {
    const {
        favouritesMovie,
        searchedFavouritesMovies,
        isResponse,
        loading,
        error
    } = useSelector(state => state.favouriteMovies);
    const isRenderMovies = !loading && searchedFavouritesMovies.length !== 0 && error === null;

    return (
        <div className={styles.favourites}>
            <Header/>
            <main>
                <section>
                    <SearchForm/>
                </section>
                <section className={styles.favourites__movies}>

                    {searchedFavouritesMovies.length === 0 && isResponse && !loading && (
                        <p className={styles.favourites__noresult}>Ничего не найдено</p>
                    )}

                    {isRenderMovies && (
                        <MoviesCardList
                            movies={!searchedFavouritesMovies.length ? favouritesMovie : searchedFavouritesMovies}
                        />
                    )}
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default FavouritesPage;