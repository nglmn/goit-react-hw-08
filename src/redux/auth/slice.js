import { createSlice } from "@reduxjs/toolkit";
import { loginUser, signUpUser } from "../auth/operations";

const INITIAL_STATE = {
    token: null,
    userData: null,
    isLoggedIn: false,
    isLoading: false,
    isError: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
        //register
        .addCase(signUpUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(signUpUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
        //login
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(loginUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
})

export const authReducer = authSlice.reducer;