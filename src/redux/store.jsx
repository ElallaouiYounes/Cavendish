import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slices/dataSlice'
import actionsSlice from './slices/actionSlice'
import authSlice from './slices/authSlice'

const store = configureStore({
    reducer: {
        data: dataSlice,
        Actions: actionsSlice,
        auth: authSlice,
    }
})

export default store;