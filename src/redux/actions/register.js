import axios from "axios"
import { actionTypes } from "./types"
export const register = (values, callback) => {
        return async dispatch => {
            dispatch({type: actionTypes.LOADING_ON})
            try {
                const result = await axios({
                    url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
                    method: "POST",
                    data: values
                })
                console.log(result)
                callback()
            }
            catch(err) {
                alert("Error")
            }
            dispatch({type: actionTypes.LOADING_OFF})

        }
}
