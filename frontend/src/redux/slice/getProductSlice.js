import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../../baseUrl';

export const getProduct = createAsyncThunk('getProduct', async(_, {rejectWithValue})=>{
    try {
        const res = await axios.get(`${base_url}/api/product/products`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState = {
    isLoading:false,
    products:[],
    error:null
}

const getProudctSlice = createSlice({
    name:'getProduct',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getProduct.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.products = action.payload
        })
        .addCase(getProduct.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export default getProudctSlice.reducer