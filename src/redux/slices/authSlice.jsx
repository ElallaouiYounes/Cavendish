import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: false,
    },
    reducers: {},
});

export default authSlice.reducer;