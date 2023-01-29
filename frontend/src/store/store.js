import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import userSlice from './userSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        modal: modalSlice,
    },
});

setupListeners(store.dispatch);

