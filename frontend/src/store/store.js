import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        auth: authSlice,
    },
});

setupListeners(store.dispatch);

