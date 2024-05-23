import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'mywishist',
    initialState:[],

    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistItem:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions

export default wishlistSlice.reducer