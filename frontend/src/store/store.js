import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import userSlice from './userSlice';
import modalSlice from './modalSlice';
import moviesSlice from './moviesSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        modal: modalSlice,
        movies: moviesSlice,
    },
});

setupListeners(store.dispatch);

