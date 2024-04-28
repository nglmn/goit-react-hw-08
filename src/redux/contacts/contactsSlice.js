import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchAllContacts, deleteContactById, addNewContact } from "./contactsOptions";


const INITIAL_STATE = {
    contacts: {
        items: null,
        loading: false,
        error: null
    }
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => builder
        //get
        .addCase(fetchAllContacts.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = action.payload;
        })
        //delete
        .addCase(deleteContactById.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = state.contacts.items.filter(contact => {
                return contact.id !== action.payload.id
            })
        })
        //post
        .addCase(addNewContact.fulfilled, (state, action) => {
            state.contacts.loading = false;
            state.contacts.items = [action.payload, ...state.contacts.items];
        })


        .addMatcher(
            isAnyOf(
                fetchAllContacts.pending,
                deleteContactById.pending,
                addNewContact.pending), (state) => {
                    state.contacts.loading = true;
                    state.contacts.error = false;
                })
        .addMatcher(isAnyOf(
            fetchAllContacts.rejected,
            deleteContactById.rejected,
            addNewContact.rejected), (state) => {
                state.contacts.loading = false;
                state.contacts.error = true;
            })
});

export const contactsReducer = contactsSlice.reducer;