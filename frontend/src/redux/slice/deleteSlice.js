import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { base_url } from '../../baseUrl';


export const deleteOrder = createAsyncThunk('deleteOrder', async(id, {rejectWithValue})=>{
    try {
        const res = await axios.delete(`${base_url}/api/order/${id}`, {

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

export const deleteSlice = createSlice({
    name:'deleteSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(deleteOrder.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(deleteOrder.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.success = true;
        })
        .addCase(deleteOrder.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export default deleteSlice.reducer;
