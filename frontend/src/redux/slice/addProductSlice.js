import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { base_url } from '../../baseUrl';


export const addProduct = createAsyncThunk('addProduct', async(formData, {rejectWithValue })=>{
    try {
        const res = await axios.post(`${base_url}/api/product/create`, formData,{

            headers:{
                'Content-Type':'multipart/form-data',
                Authorization:`Bearer ${localStorage.getItem('token')}` 
            }
        })
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})


const initialState={
    isLoading:true,
    product:[],
    error:null
}

const addProductSlice = createSlice({
    name:'addProduct',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(addProduct.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(addProduct.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.product.push(action.payload)
        })
        .addCase(addProduct.rejected, (state, action)=>{
            state.isLoading=false,
            state.error = action.payload
        })
    }
})

export const{} = addProductSlice.actions;
export default addProductSlice.reducer

