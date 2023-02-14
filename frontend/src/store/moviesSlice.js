import {createSlice} from '@reduxjs/toolkit';
import {getMovies} from '../api/moviesApi';

const searchedMovies = localStorage.getItem('searchedMovies') ? JSON.parse(localStorage.getItem('searchedMovies')) : [];
const movies = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];

const initialState = {
    movies,
    loading: false,
    error: null,
    isResponse: false,
    searchedMovies,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true;
                state.isResponse = false;
                state.error = null;
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.loading = false;
                state.movies = action.payload;
                state.isResponse = true;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const {setSearchedMovies} = moviesSlice.actions;

export default moviesSlice.reducer;