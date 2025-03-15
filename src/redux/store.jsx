import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slices/dataSlice'
import actionsSlice from './slices/actionSlice'
import authSlice from './slices/authSlice'
import wishlistSlice from './slices/wishlistSlice'

const store = configureStore({
    reducer: {
        data: dataSlice,
        Actions: actionsSlice,
        auth: authSlice,
        wishlist : wishlistSlice
    }
})

export default store;