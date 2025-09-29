import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart:JSON.parse(localStorage.getItem('cart')) || []
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState,
    reducers:{
        addToCart:(state, action)=>{
            const existItem = state.cart.find((item)=>item._id === action.payload._id)
            if(existItem){
                state.cart = state.cart.map((item)=>item._id === action.payload._id ? {...item, qty:item.qty + 1} : item)
            }else{
                state.cart.push(action.payload)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item._id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        increaseQty:(state, action)=>{
            state.cart = state.cart.map((item)=>item._id === action.payload ? {...item, qty:item.qty + 1} : item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        decreaseQty:(state, action)=>{
            state.cart = state.cart.map((item)=>item._id === action.payload ? {...item, qty:item.qty - 1} : item)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clearCart:(state)=>{
            state.cart = []
            localStorage.removeItem('cart')
        }
    }
})

export const { addToCart, removeCart, increaseQty, decreaseQty, clearCart} = cartSlice.actions;
export default cartSlice.reducer;