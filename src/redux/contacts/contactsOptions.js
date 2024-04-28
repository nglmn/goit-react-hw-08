import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";


export const fetchAllContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await instance.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const deleteContactById = createAsyncThunk("contacts/deleteContact",
    async (contactID, thunkApi) => {
        try {
            const response = await instance.delete(`/contacts/${contactID}`)
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
            const response = await instance.post(`/contacts`, data, params)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });