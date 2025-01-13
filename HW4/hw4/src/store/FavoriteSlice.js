import {createSlice} from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites : []
    },
    reducers : {
        toggle:(state, action) => {
        const isFav =  state.favorites.includes(action.payload) 
        if (isFav) {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload)
        } else{
            state.favorites.push(action.payload)
        }
        },
        // add: (state, action) => {
        //     state.favorites.push(action.payload)
        // },
        // remove: (state, action) => {
        //     state.favorites = state.favorites.filter((item) => item.id !== action.payload)
        // }
    }
    },
)
export default  FavoritesSlice.reducer;
export const {toggle} = FavoritesSlice.actions;