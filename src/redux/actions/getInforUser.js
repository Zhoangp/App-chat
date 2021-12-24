import Axios from 'axios'
import { actionTypes } from './types'

export const signIn = (values, callback) => {
    return async (dispatch) => {
        try {
            const result = await Axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                method: "POST",
                data: values
              })
              dispatch({ type: actionTypes.GET_USER, payload: result.data})
              callback(result.data.hoTen)
        }
        catch(err) {
            console.log(err)
      }
}
}