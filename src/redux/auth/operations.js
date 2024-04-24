import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const clearToken = () => {
    instance.defaults.headers.common.Authorization = "";
}

export const signUpUser = createAsyncThunk("auth/register",
    async (formData, thunkApi) => {
        try {
            const response = await instance.post("/users/signup", formData);
            setToken(response.data.token);
            console.log(response.data);//{user: {name: "carl", email: "carl@mail.com"}, token: 'eyJhbGciOiJIU'}
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const loginUser = createAsyncThunk("auth/login",
    async (formData, thunkApi) => {
        try {
            const response = await instance.post("/users/login", formData);
            setToken(response.data.token);
            console.log(response.data);//{user: {name: "carl", email: "carl@mail.com"}, token: 'eyJhbGciOiJIU'}
            return response;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)