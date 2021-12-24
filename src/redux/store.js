import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import UserReducer from "./reducer/user";

const rootReducer = combineReducers({UserReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))