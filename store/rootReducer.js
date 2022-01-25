import {
    combineReducers
} from "redux"
import playerReducer from "./slice/player"
import listReducer from "./slice/slideList"
import musicReducer from "./slice/Musics"

const UIReducers = combineReducers({
    SideList: listReducer,
    Player: playerReducer
})

const rootReducer = combineReducers({
    UI : UIReducers , 
    ent:musicReducer
})

export default rootReducer;