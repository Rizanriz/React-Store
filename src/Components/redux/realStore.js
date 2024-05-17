import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../../Slice/productSlice";

const realStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default realStore