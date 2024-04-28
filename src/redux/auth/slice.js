import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { logOutUser, loginUser, refreshUser, signUpUser } from "../auth/operations";

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
        .addCase(signUpUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData = action.payload.user; //{name: 'aaaaaaaa', email: 'aaaaa@asdas.aaaa'}
            state.token = action.payload.token;
        })
        //login
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData = action.payload.user;
            console.log(state);
            state.token = action.payload.token;
        })
        //refresh
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.userData = action.payload;
        })
        //logout
        .addCase(logOutUser.fulfilled, () => {
            return INITIAL_STATE;
        })



        .addMatcher(isAnyOf(signUpUser.pending, loginUser.pending, refreshUser.pending, logOutUser.pending), (state) => {
            state.isLoading = true;
            state.isError = false;
        })
        .addMatcher(isAnyOf(signUpUser.rejected, loginUser.rejected, refreshUser.rejected, logOutUser.rejected), (state) => {
            state.isLoading = false;
            state.isError = true;
        })
})

export const authReducer = authSlice.reducer;