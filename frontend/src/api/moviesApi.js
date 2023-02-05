import axios from 'axios';
import {MOVIES_URL} from '../utils/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const moviesApi = axios.create({
    baseURL: MOVIES_URL,
});

moviesApi.defaults.headers.common['Content-Type'] = 'application/json';

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await moviesApi();

            return data
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
);