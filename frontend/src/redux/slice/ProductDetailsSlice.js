import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const productDetails = createAsyncThunk('productDetails', async(id, {rejectWithValue})=>{
    try {
        const res = await axios.get(`http://localhost:5000/api/product/${id}`)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState={
    isLoading:false,
    product:[],
    error:null
}

const productDetailSlice = createSlice({
    name:'productDetails',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(productDetails.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(productDetails.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.product = action.payload
        })
        .addCase(productDetails.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export default productDetailSlice.reducer;