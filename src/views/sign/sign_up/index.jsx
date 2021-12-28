import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import {MdDriveFileRenameOutline} from 'react-icons/md'
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { register } from "../../../redux/actions/register";
import * as yup from 'yup'

const Index = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
      dispatch(register(values, (name) => {
        history.push(`/chat?name=${name}`)
    }))
  }
  const validate = yup.object().shape({
    taiKhoan: yup.string().required('Username is required!'),
    matKhau: yup.string().required('Password is required!'),
    hoTen: yup.string().required("Name is required!")
  })
  return (
    <Formik
        validationSchema={validate}
        onSubmit={handleSubmit}
        initialValues={{ 
            taikhoan: "",
            matKhau: "",
            email: "psadv12rq23r@gmail.com",
            soDt: "0191203901",
            maNhom: "GP01",
            maLoaiNguoiDung: "",
            hoTen: ""
        }
        }
      render={(formikProps) => {
        return (
          
          <Form>
            
            <div className="input">
              <Field  
              onChange={formikProps.handleChange}
              name="hoTen" placeholder="Name" type="text"/>
              <MdDriveFileRenameOutline/>
              <ErrorMessage name="hoTen" render={mess => {
                   return( <p className="error_mess">{mess}</p>)

              }} />
            </div>
            <div className="input">
              <Field  
              onChange={formikProps.handleChange}
              name="taiKhoan" placeholder="Username" type="text"/>
                <IoMdPerson />
                <ErrorMessage name="taiKhoan" render={mess => {
                    return (<p className="error_mess">{mess}</p>)

              }} />

            </div>
              <div className="input"><Field 

              onChange={formikProps.handleChange}
              name="matKhau" placeholder="Password" type="password"/>
              <GiPadlock />
              <ErrorMessage name="matKhau" render={mess => {
                    return(<p className="error_mess">{mess}</p>)

              }} />
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember" className="lable"> I agree</label>
                  <NavLink to="/">Sign In</NavLink>
              </div>
              <div className="login">
              {formikProps.values.taiKhoan && formikProps.values.matKhau && formikProps.values.hoTen ? 
                <button className="btn-login">Sign Up</button>
                  : <button disabled className="btn-no-login">Sign Up</button>
              }
                </div>
          </Form>
        );
      }}
    />
  );
};

export default Index;
