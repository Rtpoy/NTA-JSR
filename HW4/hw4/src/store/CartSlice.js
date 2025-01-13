import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState:{ 
        inCart:[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.inCart = state.inCart.push(action.payload) 
        },
        removeFromCart: (state, action) => {
            state.inCart = state.inCart.filter((item) => item.id  !== action.payload )
        }
    },
})

export default cartSlice.reducer;
export const {addToCart, removeFromCart} = cartSlice.actions;