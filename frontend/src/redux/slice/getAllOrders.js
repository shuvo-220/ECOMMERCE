import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllOrders = createAsyncThunk('orders', async(_, {rejectWithValue})=>{
    try {
        const res = await axios.get('http://localhost:5000/api/order/orders',{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState={
    isLoading:false,
    orders:[],
    error:null
}

const getAllOrdersSlice = createSlice({
    name:'getAllOrders',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllOrders.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(getAllOrders.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orders = action.payload;
        })
        .addCase(getAllOrders.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default getAllOrdersSlice.reducer;