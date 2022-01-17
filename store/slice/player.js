// import {createAction , createReducer} from "@reduxjs/toolkit"
import {createSlice} from "@reduxjs/toolkit"
import {initialState} from "../store"

// export const PLAY_TOGGLE = createAction("PLAY_TOGGLE");
// export const SLIDER_CHANGE = createAction("SLIDER_CHANGE");
// export const TO_NEXT = createAction("TO_NEXT");
// export const TO_PREV = createAction("TO_PREV");


// const playerReducer = createReducer(initialState ,{
//     [PLAY_TOGGLE.type] : (state , action)=>{
//         state.entities.player.isPlaying = !state.entities.player.isPlaying
//     }
// }
// )

const playerSlice = createSlice({
    name : "playerSlice" , 
    initialState : initialState , 
    reducers : {
        PLAY_TOGGLE  : (state ,action)=>{
            
        }
    }
})


// export default playerReducer;