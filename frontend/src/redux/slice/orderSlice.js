import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const createOrder = createAsyncThunk('createOrder', async(createOrder, {rejectWithValue})=>{
    try {
        const res = await axios.post('http://localhost:5000/api/order/create')
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState={
    isLoading :false,
    order : [],
    error : null
}

const orderSlice=createSlice({
    name:'order',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(createOrder.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(createOrder.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.order = action.payload
        })
        .addCase(createOrder.rejected, (state, action)=>{
            state.isLoading=false,
            state.error=action.payload
        })
    }
})

export default orderSlice.reducer;