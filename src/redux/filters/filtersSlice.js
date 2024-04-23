import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "../constants";

const filtersSlice = createSlice({
    name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        setFilter(state, action) {
            state.filters.name = action.payload;
        }
    }
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
