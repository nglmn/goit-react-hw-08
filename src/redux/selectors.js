import { createSelector } from "@reduxjs/toolkit";

export const selectUsers = state => state.contacts.contacts.items;
export const selectLoading = state => state.contacts.contacts.loading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filters.filters.name;

export const selectFilteredUsers = createSelector([selectUsers, selectFilter], (users, filter) => {
    return users.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
    })
})
