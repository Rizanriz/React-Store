import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../Slice/productSlice";
import wishlistSlice from "../../Slice/wishlistSlice";

const realStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice
    }
})

export default realStore