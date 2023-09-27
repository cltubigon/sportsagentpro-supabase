import { combineReducers } from "redux"
import utilsReducer from "./utilsReducer"
import athleteReducer from "./athleteReducer"

const rootReducer = combineReducers({
  utils: utilsReducer,
  athlete: athleteReducer,
})

export default rootReducer