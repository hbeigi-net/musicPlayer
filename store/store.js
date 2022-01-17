// import {createStore } from "redux"
import {configureStore} from "@reduxjs/toolkit"
import reducer from "./reducer"
import musics from "./data"
console.log(musics);
export const initailState ={
    musicList : musics,
    entities : {
        player : {
            currentMusic : {
                title : "nothing elese matters" , 
                artist : "metallica"
            },
            isPlaying : false 
        },
        sideList : {
            open : true , 
        }
    }
    , 
    user : {
        currentUser : {
            name : "hamid" , 
            id : "hbeigi"
        }
    }
}

const store = configureStore({reducer : reducer});