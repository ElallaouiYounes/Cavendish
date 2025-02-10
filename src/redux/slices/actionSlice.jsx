import { createSlice } from "@reduxjs/toolkit";

const actionSlice = createSlice({
    name: "Actions",
    initialState: {
        openCart: false,
        openCategories: false,
    },
    reducers: {
        toggleCart: (state) => {
            state.openCart = !state.openCart;
        },
        toggleCategorie: (state) => {
            state.openCategories = !state.openCategories;
        },
    },
})

export const { toggleCart, toggleCategorie } = actionSlice.actions;
export default actionSlice.reducer;