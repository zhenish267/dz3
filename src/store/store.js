import { combineReducers } from "redux";
import { inputReducer } from "./inputReducer";
import { addNumberReducer } from "./numberReducer";
import { titleReducer } from "./titleReducer";
import { usersReducer } from "./usersReducer";



export const rootReducer = combineReducers({
    title: titleReducer,
    input: inputReducer,
    users: usersReducer,
    numbers: addNumberReducer
})
