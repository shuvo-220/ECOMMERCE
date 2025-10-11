import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUsers = createAsyncThunk('getUsers', async(_, {rejectWithValue})=>{
    try {
        const res = await axios.get('https://deployment-backend-brown.vercel.app/api/user/users', {
            headers:{
                Authorization :`Bearer ${localStorage.getItem('token')}`
            }
        })
        return res.data
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const initialState={
    isLoading : false,
    users:[],
    error:null
}

const userSlice = createSlice({
    name:'getUser',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getUsers.fulfilled, (state, action)=>{
            state.isLoading = false,
            state.users = action.payload
        })
        .addCase(getUsers.rejected, (state, action)=>{
            state.isLoading = false,
            state.error = action.payload
        })
    }
})

export default userSlice.reducer;
