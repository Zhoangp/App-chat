import { actionTypes } from "../actions/types";
const initial = {
    information: null
}
const UserReducer = (state = initial, action) => {
    switch (action.type) {
        case actionTypes.GET_USER: {
            state.information = action.payload
            console.log(state.information)
            return {...state}
        }
    
        default:
            return {...state}
    }
}
export default UserReducer