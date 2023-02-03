import {createSlice} from '@reduxjs/toolkit';
import {createMovie, deleteMovie, getFavouritesMovies} from '../api/mainApi';

const searchedFavouritesMovies = localStorage.getItem('searchedFavouritesMovies') ? JSON.parse(localStorage.getItem('searchedFavouritesMovies')) : [];

const initialState = {
    favouritesMovie: [],
    loading: false,
    error: null,
    searchedFavouritesMovies,
}

const favouriteMoviesSlice = createSlice({
    name: 'favouriteMovies',
    initialState,
    reducers: {
        getSearchedFavouritesMovies: (state, action) => {
            state.searchedFavouritesMovies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFavouritesMovies.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getFavouritesMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.searchedFavouritesMovies = action.payload;
            })
            .addCase(getFavouritesMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.favouritesMovie.push(action.payload);
            })
            .addCase(createMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteMovie.fulfilled, (state, action) => {
                const idMovie = action.payload._id;
                state.loading = false;
                state.favouritesMovie = state.favouritesMovie.filter(movie => movie._id !== idMovie);
            })
            .addCase(deleteMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const {getSearchedFavouritesMovies} = favouriteMoviesSlice.actions;

export default favouriteMoviesSlice.reducer;