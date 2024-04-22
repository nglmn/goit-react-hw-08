import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const response = await axios.get("https://6622631827fcd16fa6c9a72a.mockapi.io/contacts");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });

export const deleteContactById = createAsyncThunk("contacts/deleteContact",
    async (contactID, thunkApi) => {
        try {
            const response = await axios.delete(`https://6622631827fcd16fa6c9a72a.mockapi.io/contacts/${contactID}`)
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
            const response = await axios.post(`https://6622631827fcd16fa6c9a72a.mockapi.io/contacts/`, data, params)
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    });