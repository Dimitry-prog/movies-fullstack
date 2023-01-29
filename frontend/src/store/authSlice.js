import {createSlice} from '@reduxjs/toolkit';
import {checkUserToken, loginUser, logoutUser, registerUser} from '../api/authApi';

const initialState = {
    loading: false,
    error: null,
    isAuth: false,
    success: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // registration: (state, action) => {
        //     state.userInfo = action.payload;
        // },
        // setCredentials: (state, action) => {
        //     const {accessToken} = action.payload;
        //     state.token = accessToken;
        //     state.isLoginIn = true;
        // },
        // logOut: (state, action) => {
        //     state.isAuth = false;
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(logoutUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = false;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(checkUserToken.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(checkUserToken.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuth = true;
            })
            .addCase(checkUserToken.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
});

export const {registration, setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;