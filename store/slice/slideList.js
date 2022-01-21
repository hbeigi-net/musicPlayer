import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";
import {
    togglePlay
} from "./player";


export const toggleList = createAction("TOGGLE_LIST")


const initialState = {
    isOpen: true
}

const listReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(togglePlay, (state, action) => {
            state.isOpen = !state.isOpen
        })
})

export default listReducer;