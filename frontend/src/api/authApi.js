import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const authApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        Accept: `application/json`,
        "Access-Control-Allow-Origin": "*"
    }
});

// authApi.defaults.headers.common['content-type'] = 'application/json';

export const registerUser = createAsyncThunk(
    'auth/register',
    async ({name, email, password}, {rejectWithValue}) => {
        try {
            const {data} = await authApi.post(
                `/signup`,
                {name, email, password},
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

export const loginUser = createAsyncThunk(
    'auth/login',
    async ({email, password}, {rejectWithValue}) => {
        try {
            const {data} = await authApi.post(
                `/signin`,
                {email, password},
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

export const logoutUser = createAsyncThunk(
    'auth/logout',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await authApi(`/signout`);
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

export const checkUserToken = createAsyncThunk(
    'auth/checkToken',
    async (_, {rejectWithValue}) => {
        try {
            await authApi(`users/me`);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)