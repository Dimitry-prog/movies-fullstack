import {createSlice} from '@reduxjs/toolkit';
import {getMovies} from '../api/moviesApi';

const initialState = {
    movies: [],
    loading: false,
    error: null,
}

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                console.log('payload', action.payload);
                state.loading = false;
                state.movies = action.payload;
            })
            .addCase(getMovies.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
});

export default moviesSlice.reducer;