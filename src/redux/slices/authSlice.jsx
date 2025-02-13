import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: true,
    },
    reducers: {},
});

export default authSlice.reducer;