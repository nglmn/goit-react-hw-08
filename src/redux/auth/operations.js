import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";




export const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com"
});

export const setToken = (token) => {
    return instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}
export const clearToken = () => {
    return instance.defaults.headers.common.Authorization = "";
}

export const signUpUser = createAsyncThunk("auth/register",
    async (formData, thunkApi) => {
        try {
            const response = await instance.post("/users/signup", formData);
            setToken(response.data.token);
            console.log(response.data);//{user: {name: "carl", email: "carl@mail.com"}, token: 'eyJhbGciOiJIU'}
            return response.data;
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
            console.log(response);//{user: {name: "carl", email: "carl@mail.com"}, token: 'eyJhbGciOiJIU'}
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const refreshUser = createAsyncThunk("auth/refresh",
    async (_, thunkApi) => {
        try {
            //звертаємось до стану аутентифікації
            const state = thunkApi.getState();
            //забираємо токен зі стореджу
            const token = state.auth.token;
            setToken(token);

            const response = await instance.get("/users/current");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const logOutUser = createAsyncThunk("auth/logout",
    async (_, thunkApi) => {
        try {
            await instance.post("users/logout");
            clearToken();
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)