import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { CounterState, Image, RootState } from '../../types'
import axios from 'axios'

const initialState: CounterState = {
    count: 0,
    images: [],
    loading: false,
    error: ''
}

const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
    await timeout(5000)
    const response = (await axios.get(`https://jsonplaceholder.typicode.com/photos`)).data
    return response as Image[]
})



const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.count += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchImages.fulfilled, (state, { payload }) => {
                state.loading = false
                state.images = payload
            })
            .addCase(fetchImages.rejected, (state, { payload }) => {
                state.loading = false
                state.error = payload as string
            })

    }

});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const counterReducer = counterSlice.reducer
export const selectCount = (state: RootState) => state.counter.count;