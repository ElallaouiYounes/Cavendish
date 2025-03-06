import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        users: [
            {
                id: 1,
                username: 'Mody2004',
                email: 'younes@gmail.com',
                password: 'younes123',
            },
            {
                id: 2,
                username: 'Gabby2025',
                email: 'yassine@gmail.com',
                password: 'yassine123',
            },
            {
                id: 3,
                username: 'Coddy2004',
                email: 'yousef@gmail.com',
                password: 'yousef123',
            },
            {
                id: 4,
                username: 'Jake1234',
                email: 'janah@gmail.com',
                password: 'janah123',
            },
        ],
        isLogged: false,
        loggedUser:null,
    },
    reducers: {
        login: (state, action) => {
            const user = state.users.find(
                (user) => user.email === action.payload.email && user.password === action.payload.password
            );
            state.isLogged = !!user;
            state.loggedUser = user || null;
        },

        logout: (state) => {
            state.isLogged = false;
            state.loggedUser = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
