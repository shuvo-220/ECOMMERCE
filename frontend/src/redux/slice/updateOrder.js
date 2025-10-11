import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { base_url } from '../../baseUrl';

export const orderStatus = createAsyncThunk('updateOrder', async({id, status}, {rejectWithValue})=>{
    try {
        const res = await axios.put(`${base_url}/api/order/${id}`,{status},{

      
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
    success:false,
    error:null
}

const orderStatusSlice = createSlice({
    name:'orderStatus',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(orderStatus.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(orderStatus.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.success = true
        })
        .addCase(orderStatus.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export default orderStatusSlice.reducer;
