import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from 'redux-thunk'
import UserReducer from "./reducer/user";
import LoadingReducer from "./reducer/loading"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({UserReducer, LoadingReducer})
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))