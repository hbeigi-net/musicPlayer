import {
    createAction,
    createReducer
} from "@reduxjs/toolkit";

const initialState = {
    isPlaying: false,
    currentTime : 0 
}

export const togglePlay = createAction("TOGGLE_PLAY");

// export const sliderChange = createAction("SLIDER_CHANGE");



const playerReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(togglePlay, (state, action) => {
            state.isPlaying = action.payload.isplaying
            console.log("togglePlay invoked")
        })

})

export default playerReducer;