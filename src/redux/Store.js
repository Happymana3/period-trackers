// src/redux/Store.js
// src/redux/Store.js
import { configureStore } from '@reduxjs/toolkit';
import periodReducer from './periodSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        periods: periodReducer,
        user: userReducer,
    },
});
