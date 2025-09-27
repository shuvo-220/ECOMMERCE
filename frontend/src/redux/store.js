import { configureStore } from "@reduxjs/toolkit";
import addProduct from './slice/addProductSlice';
import getProduct from './slice/getProductSlice';
import  getUsers  from "./slice/userSlice";


const store = configureStore({
    reducer:{
        addProduct:addProduct,
        products:getProduct,
        users:getUsers
    }
})

export default store;