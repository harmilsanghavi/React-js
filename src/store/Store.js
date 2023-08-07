import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import { AdminSlice } from "./AdminSlice";
import { postApi } from "./postApi";
import prefetchSlice from "./prefetchSlice";
import { Streaming } from "./Streaming";

const Store = configureStore({
    reducer:{
        cart: cartSlice ,
        products: productSlice,
        [AdminSlice.reducerPath]:AdminSlice.reducer,
        [postApi.reducerPath]:postApi.reducer,
        [Streaming.reducerPath]: Streaming.reducer,
        data:prefetchSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postApi.middleware,AdminSlice.middleware,Streaming.middleware),
    
})

export default Store;