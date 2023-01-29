import {createSlice} from '@reduxjs/toolkit';
import {getUserInfo, patchUserInfo} from '../api/userApi';

const initialState = {
    user: {},
    loading: false,
    error: null,
    success: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(getUserInfo.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(patchUserInfo.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(patchUserInfo.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.success = true;
            })
            .addCase(patchUserInfo.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
});

export default userSlice.reducer;