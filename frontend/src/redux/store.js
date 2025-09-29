import { configureStore } from "@reduxjs/toolkit";
import addProduct from './slice/addProductSlice';
import getProduct from './slice/getProductSlice';
import getUsers from "./slice/userSlice";
import productDetails from './slice/ProductDetailsSlice';
import addToCart from './slice/AddToCartSlice';
import increaseQty from "./slice/AddToCartSlice";
import decreaseQty from "./slice/AddToCartSlice";
import removeCart from "./slice/AddToCartSlice";


const store = configureStore({
    reducer: {
        addProduct: addProduct,
        products: getProduct,
        users: getUsers,
        product: productDetails,
        addToCart: addToCart,
        increaseQty: increaseQty,
        decreaseQty: decreaseQty,
        removeCart : removeCart
    }
})

export default store;