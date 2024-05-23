import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../Slice/productSlice";
import wishlistSlice from "../../Slice/wishlistSlice";
import cartSlice from "../../Slice/cartSlice";

const realStore = configureStore({
    reducer:{
        productReducer:productSlice,
        wishlistReducer:wishlistSlice,  
        cartReducer:cartSlice
    }
})

export default realStore