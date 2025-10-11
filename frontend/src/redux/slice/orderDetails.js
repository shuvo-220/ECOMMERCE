import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { base_url } from "../../baseUrl";

export const orderDetailss = createAsyncThunk('orderDetails', async(id, {rejectWithValue})=>{
    try {
        const res = await axios.get(`${base_url}/api/order/${id}`,{
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
    orderDetails:{},
    error:null
}

export const orderDetailsSlice = createSlice({
    name:'orderDetails',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(orderDetailss.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(orderDetailss.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.orderDetails = action.payload
        })
        .addCase(orderDetailss.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload
        })
    }
})


export default orderDetailsSlice.reducer;
