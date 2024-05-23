import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cartItems",
    initialState:[],
    reducers:{
        addToCart:(sate,action)=>{
            const existingProduct = state.find(item=>item.id == action.payload.id)
            if (existingProduct) {
                const remaingProducts = state.find(item=>item.id != existingProduct.id)
                existingProduct.quantity++
                existingProduct.totalprice = existingProduct.price * existingProduct.quantity
                state = [...remaingProducts,existingProduct]
            }else{
                state.push({...action.payload,quantity:1,totalprice:action.payload.price * quantity})
            }
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer