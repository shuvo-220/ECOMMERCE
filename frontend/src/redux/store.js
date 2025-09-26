import { configureStore } from "@reduxjs/toolkit";
import addProduct from './slice/addProductSlice';


const store = configureStore({
    reducer:{
        addProduct:addProduct
    }
})

export default store;