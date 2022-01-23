import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

const initialState = {

    isPlaying: false,

}

export const togglePlay = createAction("TOGGLE_PLAY");
export const changeMusic = createAction("CHANGE_MUSIC");
export const sliderChange = createAction("SLIDER_CHANGE");



const playerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeMusic, (state, action) => {
            state.currentMusicId = action.payload.musicId
        })
        .addCase(togglePlay, (state, action) => {
            state.isPlaying = !action.payload.isPlaying
            console.log("togglePlay invoked")
        })

})

export default playerReducer;