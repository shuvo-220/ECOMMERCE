import { configureStore } from "@reduxjs/toolkit";
import addProduct from './slice/addProductSlice';
import getProduct from './slice/getProductSlice';
import getUsers from "./slice/userSlice";
import productDetails from './slice/ProductDetailsSlice';
import addToCart from './slice/AddToCartSlice';
import increaseQty from "./slice/AddToCartSlice";
import decreaseQty from "./slice/AddToCartSlice";
import removeCart from "./slice/AddToCartSlice";
import order from './slice/orderSlice';
import userOrder from './slice/myOrder';
import allOrderSlice from './slice/getAllOrders';
import category from './slice/categorySlice';
import search from './slice/searchSlice';
import orderDetails from './slice/orderDetails';
import deleteOrder from './slice/deleteSlice';
import orderStatus from './slice/updateOrder';


const store = configureStore({
    reducer: {
        addProduct: addProduct,
        products: getProduct,
        users: getUsers,
        product: productDetails,
        addToCart: addToCart,
        increaseQty: increaseQty,
        decreaseQty: decreaseQty,
        removeCart : removeCart,
        order:order,
        userOrder:userOrder,
        orders:allOrderSlice,
        category:category,
        search:search,
        orderDetails:orderDetails,
        deleteOrder:deleteOrder,
        orderStatus:orderStatus
    }
})

export default store;