import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const mainApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// mainApi.defaults.headers.common['content-type'] = 'application/json';

export const getUserInfo = createAsyncThunk(
    'user/getInfo',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await mainApi(`/users/me`);

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

export const patchUserInfo = createAsyncThunk(
    'user/patchInfo',
    async ({name, email}, {rejectWithValue}) => {
        try {
            const {data} = await mainApi.patch(
                `/users/me`,
                {name, email},
            );

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

export const getFavouritesMovies = createAsyncThunk(
    'user/favouritesMovies',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await mainApi('/movies');

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

export const createMovie = createAsyncThunk(
    'user/createMovie',
    async (movie, {rejectWithValue}) => {
        try {
            const {data} = await mainApi.post('/movies', movie);

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

export const deleteMovie = createAsyncThunk(
    'user/deleteMovie',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await mainApi.delete(`/movies/${id}`);

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