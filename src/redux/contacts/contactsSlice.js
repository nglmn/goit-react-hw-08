import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../constants";
import { fetchAllContacts, deleteContactById, addNewContact } from "./contactsOps";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
        //get
        .addCase(fetchAllContacts.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = false;
        })
        .addCase(fetchAllContacts.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = [...state.contacts.items, ...action.payload];
        })
        .addCase(fetchAllContacts.rejected, (state) => {
            state.contacts.error = true;
        })
        //delete
        .addCase(deleteContactById.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = false;
        })
        .addCase(deleteContactById.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = state.contacts.items.filter(contact => {
                return contact.id !== action.payload.id
            })
        })
        .addCase(deleteContactById.rejected, (state) => {
            state.contacts.error = true;
        })
        //post
        .addCase(addNewContact.pending, (state) => {
            state.contacts.loading = true;
            state.contacts.error = false;
        })
        .addCase(addNewContact.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = [action.payload, ...state.contacts.items];
        })
        .addCase(addNewContact.rejected, (state) => {
            state.contacts.error = true;
        })
});

export const contactsReducer = contactsSlice.reducer;