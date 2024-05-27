// src/redux/periodSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../firebase';

export const fetchPeriods = createAsyncThunk('periods/fetchPeriods', async () => {
    const periodsCollection = await db.collection('periods').get();
    return periodsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});

export const addPeriod = createAsyncThunk('periods/addPeriod', async (period) => {
    const newPeriodRef = await db.collection('periods').add(period);
    const newPeriod = await newPeriodRef.get();
    return { id: newPeriod.id, ...newPeriod.data() };
});

const periodSlice = createSlice({
    name: 'periods',
    initialState: {
        periods: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        // your regular reducers go here
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeriods.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPeriods.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.periods = action.payload;
            })
            .addCase(fetchPeriods.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPeriod.fulfilled, (state, action) => {
                state.periods.push(action.payload);
            });
    },
});

export default periodSlice.reducer;

