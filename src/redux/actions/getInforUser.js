import Axios from 'axios'
import { actionTypes } from './types'

export const signIn = (values, callback) => {
    return async (dispatch) => {
        dispatch({type: actionTypes.LOADING_ON})
        try {
            const result = await Axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: values
              })
            dispatch({type: actionTypes.LOADING_OFF})
            
              await dispatch({ type: actionTypes.GET_USER, payload: result.data})
              callback(result.data.hoTen)
        }
        catch(err) {
            alert("Username or Password is incorrect!")
      }
      dispatch({type: actionTypes.LOADING_OFF})

}
}