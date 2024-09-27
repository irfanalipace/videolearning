import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducer";
// import { authReducer } from "./reducer";
const rootReducer = combineReducers({
    admin: authReducer,


})

export default rootReducer