import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk("auth/register",
    async (_, thunkApi) => {
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/users/signup`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const loginUser = createAsyncThunk("auth/login",
    async (_, thunkApi) => {
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/users/login`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const logoutUser = createAsyncThunk("auth/logout",
    async (_, thunkApi) => {
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/users/logout`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const getUserInfo = createAsyncThunk("auth/current",
    async (_, thunkApi) => {
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/users/current`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
