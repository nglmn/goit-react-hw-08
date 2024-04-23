import { createSelector } from "@reduxjs/toolkit";
import { selectUsers } from "../contacts/contactsSelectors";

export const selectFilter = state => state.filters.filters.name;

export const selectFilteredUsers = createSelector([selectUsers, selectFilter], (users, filter) => {
    return users.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
    })
})
