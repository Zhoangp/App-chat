import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk'
import UserReducer from "./reducer/user";
import LoadingReducer from "./reducer/loading";
const rootReducer = combineReducers({UserReducer, LoadingReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk))