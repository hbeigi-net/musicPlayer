import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

export const toggleList = createAction("TOGGLE_LIST")

const initialState = {
    isOpen: false
}

const listReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleList, (state, action) => {
            state.isOpen = !state.isOpen
        })
})

export default listReducer;