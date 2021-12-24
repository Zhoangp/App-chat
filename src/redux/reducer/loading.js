import { actionTypes } from "../actions/types";
const initial = {
    check: false
}
const LoadingReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.LOADING_ON:
            state.check = true
            return{...state}
        case actionTypes.LOADING_OFF:
            state.check = false
            return{...state}
        default:
            return{...state}
    }
}
export default LoadingReducer