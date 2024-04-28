import { createSelector } from "@reduxjs/toolkit";
import { selectGetUsers } from "../contacts/selectors";

export const selectFilter = state => state.filter.filter.name;

export const selectFilteredUsers = createSelector([selectGetUsers, selectFilter], (users, filter) => {
    if (!users) return;

    return users.filter(user => {
        return user.name.toLowerCase().includes(filter.toLowerCase());
    })
})