// src/redux/userSlice.js
// src/redux/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../firebase';

export const login = createAsyncThunk('user/login', async ({ email, password }) => {
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return userCredential.user;
});

export const signup = createAsyncThunk('user/signup', async ({ email, password }) => {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    return userCredential.user;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        logout: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setUser, clearUser, logout } = userSlice.actions;
export default userSlice.reducer;
