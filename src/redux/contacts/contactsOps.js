import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get("https://connections-api.herokuapp.com/contacts");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const deleteContactById = createAsyncThunk("contacts/deleteContact",
    async (contactID, thunkApi) => {
        try {
            const response = await axios.delete(`https://connections-api.herokuapp.com/contacts/${contactID}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const addNewContact = createAsyncThunk("contacts/addContact",
    async (data, thunkApi) => {
        const params = {
            headers: {
                'Content-Type': 'application/json',
            }
        }
        try {
            const response = await axios.post(`https://connections-api.herokuapp.com/contacts/`, data, params)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const updateContact = createAsyncThunk("contacts/updateContact",
    async (contactID, thunkApi) => {
        try {
            const response = await axios.patch(`https://connections-api.herokuapp.com/contacts/${contactID}`)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });