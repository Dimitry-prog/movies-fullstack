import React, {useEffect} from 'react';
import styles from './FavouritesPage.module.scss';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {getFavouritesMovies} from '../../api/mainApi';
import {setSearchedFavouritesMovies} from '../../store/favouriteMoviesSlice';


const FavouritesPage = () => {
    const {
        favouritesMovie,
        searchedFavouritesMovies,
        isResponse,
        loading,
        error
    } = useSelector(state => state.favouriteMovies);
    const dispatch = useDispatch();
    const isRenderMovies = !loading && searchedFavouritesMovies.length !== 0 && error === null;

    useEffect(() => {
        dispatch(getFavouritesMovies({}));
        dispatch(setSearchedFavouritesMovies({}));
    }, []);

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