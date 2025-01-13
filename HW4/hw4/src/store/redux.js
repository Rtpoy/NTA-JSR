import cartSlice from "./CartSlice"
import {configureStore} from "@reduxjs/toolkit";
import FavoriteSice from "./FavoriteSlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
   reducer: {
    cart: cartSlice,
    fav: FavoriteSice,
    prod: ProductSlice
   }
});
