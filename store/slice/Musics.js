import {
    createAction,
    createReducer
} from "@reduxjs/toolkit"
import musics from "../data";


export const selectByClick = createAction("SELECT_BY_CLICK");
export const toNext = createAction("TO_NEXT");
export const toPrev = createAction("TO_PREX");



const initialState = {
    musicList: musics,
    currentMusic: musics[0],

}

const musicReducer = createReducer(initialState, {
    [selectByClick.type]: (state, action) => {
        const newIndex = state.musicList.findIndex(item => item.id === action.payload.id);
        //    console.log(state["currentMusic"]);
        return {
            [state.currentMusic]: state.musicList[newIndex]
        }

    },
    [toNext.type]: (state, action) => {
        const currentIndex = state.currentMusic.id;
        if (currentIndex == state.musicList.length - 1) {
            state.currentMusic = state.musicList[0]
        } else {
            state.currentMusic = state.musicList[currentIndex + 1];

        }
    },
    [toPrev.type]: (state, action) => {
        const currentIndex = state.currentMusic.id;
        if (currentIndex == 0) {
            state.currentMusic = state.musicList[state.musicList.length - 1]
        } else {
            state.currentMusic = state.musicList[currentIndex - 1];

        }
    },
})

// const newReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case selectByClick.type:
//             const newIndex = state.musicList.findIndex(item => item.id === action.payload.id);
//             return {
//                 ...state , 
//                 currentMusic: state.musicList[newIndex]
//             }


//         default:
//             return {...state}
//     }
// }

export default musicReducer;