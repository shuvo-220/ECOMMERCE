import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { base_url } from '../../baseUrl';

export const createOrder = createAsyncThunk(
  'createOrder',
  async (orderData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/api/order/create`, orderData,

        { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  order: [],
  error: null
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createOrder.pending, (state) => {
      state.isLoading = true
    })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false,
          state.order = action.payload
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.isLoading = false,
          state.error = action.payload
      })
  }
})

export default orderSlice.reducer;
