import {createSlice} from '@reduxjs/toolkit';
import {checkUserToken, loginUser, logoutUser, registerUser} from '../api/authApi';

const initialState = {
    loading: false,
    error: null,
    isAuth: false,
    errorToken: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuth = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isAuth = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(checkUserToken.pending, (state) => {
                state.loading = true;
                state.errorToken = null;
                state.isAuth = false;
            })
            .addCase(checkUserToken.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(checkUserToken.rejected, (state, action) => {
                state.loading = false;
                state.errorToken = action.payload;
            })
    }
});

export default authSlice.reducer;