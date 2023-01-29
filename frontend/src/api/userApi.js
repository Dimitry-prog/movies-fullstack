import axios from 'axios';
import {BASE_URL} from '../utils/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {authApi} from './authApi';

export const userApi = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

userApi.defaults.headers.common['Content-Type'] = 'application/json';

export const getUserInfo = createAsyncThunk(
    'user/getInfo',
    async ({}, {rejectWithValue}) => {
        try {
            const {data} = await userApi(`/users/me`);

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
            const {data} = await userApi.patch(
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