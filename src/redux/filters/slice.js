import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filter: {
        name: ""
    }
}

const filtersSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        setFilter(state, action) {
            state.filter.name = action.payload;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;