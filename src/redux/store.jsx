import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./slices/dataSlice";
import actionsSlice from "./slices/actionSlice";
import authSlice from "./slices/authSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    data: dataSlice,
    Actions: actionsSlice,
    auth: authSlice,
    cart: cartSlice,
  },
});

export default store;
