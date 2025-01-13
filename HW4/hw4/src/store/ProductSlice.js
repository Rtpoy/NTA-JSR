import { createSlice } from '@reduxjs/toolkit'

const ProductSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
    },
    reducers: {
         fetchProducts: (state, action) =>  (
            state.products = action.payload
         )    
    }
})

export default  ProductSlice.reducer;
export const {fetchProducts} = ProductSlice.actions;