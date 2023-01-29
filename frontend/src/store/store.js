import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
    },
});

setupListeners(store.dispatch);

