import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import cartSlice from "./cartSlice";

const Store = configureStore({
    reducer:{
        products:ProductSlice,
        cart:cartSlice
    }
})

export default Store;