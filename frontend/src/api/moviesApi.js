import axios from 'axios';
import {MOVIES_URL} from '../utils/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const moviesApi = axios.create({
    baseURL: MOVIES_URL,
});

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async ({}, {rejectWithValue}) => {
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