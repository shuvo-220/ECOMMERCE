import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserOrder=createAsyncThunk('userOrder', async(__, {rejectWithValue})=>{
    try {
        const res = await axios.get('http://localhost:5000/api/order/myorder',{
            headers:{
                'Content-Type':'application/json',
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState={
    isLoading : false,
    order:[],
    error:null
}


const userOrder = createSlice({
    'name':'userOrder',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUserOrder.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getUserOrder.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.order = action.payload
        })
        .addCase(getUserOrder.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export default userOrder.reducer;