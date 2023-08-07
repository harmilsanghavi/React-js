import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StatusCode from "../utils/StatusCode";

const initialState = {
    data:[],
    status:StatusCode.IDLE
}

const ProductSlice = createSlice({
    name:'Product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProduct.pending,(state,action)=>{
            state.status=StatusCode.LOADING;
        })
        .addCase(getProduct.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status=StatusCode.IDLE;
        })
        .addCase(getProduct.rejected,(state,action)=>{
            state.status=StatusCode.ERROR;
        })
    }
})


// export const {fetchProducts} = ProductSlice.actions;
export default ProductSlice.reducer;

export const getProduct = createAsyncThunk('product/get',async()=>{
    const data=await fetch('http://fakestoreapi.com/products')
    const result=await data.json();
    return result
})