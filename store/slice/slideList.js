import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";
import musics from "../data"
// import {
//     togglePlay
// } from "./player";


export const toggleList = createAction("TOGGLE_LIST")


const initialState = {
    isOpen: false,
    musicList : musics,
    currentMusic: musics[7]
}

const listReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(toggleList, (state, action) => {
            state.isOpen = !state.isOpen
        })
})

export default listReducer;