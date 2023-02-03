import React, {useEffect} from 'react';
import styles from './FavouritesPage.module.scss';
import MoviesCardList from '../../components/MoviesCardList/MoviesCardList';
import SearchForm from '../../components/SearchForm/SearchForm';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {useDispatch, useSelector} from 'react-redux';
import {getFavouritesMovies} from '../../api/mainApi';

const FavouritesPage = () => {
    const {favouritesMovie} = useSelector(state => state.favouriteMovies);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getFavouritesMovies({}));
    // }, []);

    return (
        <div className={styles.favourites}>
            <Header/>
            <main>
                <section>
                    <SearchForm/>
                </section>
                <section className={styles.favourites__movies}>
                    <MoviesCardList movies={favouritesMovie}/>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default FavouritesPage;