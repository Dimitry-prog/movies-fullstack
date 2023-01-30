import {createSlice} from '@reduxjs/toolkit';
import {getMovies} from '../api/moviesApi';

const searchedMovies = localStorage.getItem('searchedMovies') ? JSON.parse(localStorage.getItem('searchedMovies')) : [];

const initialState = {
    movies: [],
    loading: false,
    error: null,
    isResponse: false,
    searchedMovies,
    searchedQuery: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        getSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        },
        setSearchedQuery: (state, action) => {
            state.searchedQuery = action.payload;
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

export const {getSearchedMovies, setSearchedQuery} = moviesSlice.actions;

export default moviesSlice.reducer;