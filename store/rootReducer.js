import {
    combineReducers
} from "redux"
import playerReducer from "./slice/player"
import listReducer from "./slice/slideList"

const rootReducer = combineReducers({
    SideList: listReducer,
    Player: playerReducer
})

export default rootReducer;