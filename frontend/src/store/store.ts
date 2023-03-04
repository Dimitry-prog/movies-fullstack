import {configureStore} from '@reduxjs/toolkit';
import userSlice from "./slices/userSlice";
import modalSlice from "./slices/modalSlice";
import moviesSlice from "./slices/moviesSlice";
import authSlice from "./slices/authSlice";
import favouriteMoviesSlice from "./slices/favouriteMoviesSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        user: userSlice,
        modal: modalSlice,
        movies: moviesSlice,
        favouriteMovies: favouriteMoviesSlice,
    },
});

export default store;