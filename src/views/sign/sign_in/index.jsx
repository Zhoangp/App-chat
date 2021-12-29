import React, { Fragment, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signIn } from "../../../redux/actions/getInforUser";
import {Button} from "@mui/material"
import * as yup from 'yup'
const Index = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const submit = (values) => {
    dispatch(signIn(values, (name) => {
      history.push(`/chat?name=${name}&room=1`)
  }))
  }
  const validate = yup.object().shape({
    taiKhoan: yup.string().required('Username is required!'),
    matKhau: yup.string().required('Password is required!')
  })
  return (
    <Formik 
    validationSchema={validate}
    initialValues={
      {taiKhoan: "",
      matKhau: ""
    }
    }
    onSubmit={submit}
    render={formikProps => {
      return (
            <Form>
              <div className="input">
                <Field
                  name="taiKhoan"
                  type="text"
                  placeholder="Username"
                  onChange={formikProps.handleChange}
                />
                <IoMdPerson />
                <ErrorMessage 
                name="taiKhoan"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }}/>
              </div>
              <div className="input">
                <Field
                  name="matKhau"
                  type="password"
                  placeholder="Password"
                  onChange={formikProps.handleChange}
                />
                <GiPadlock />
                <ErrorMessage 
                name="matKhau"
                render={mess => {
                  return(
                    <p className="error_mess">{mess}</p>
                  )
                }} />
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox" 
                      defaultChecked="checked"
                  />
                  <label htmlFor="remember" className="lable">Remember</label>
                  <NavLink to="/signup">Sign Up</NavLink>
              </div>
              <div className="login">
              {formikProps.values.taiKhoan && formikProps.values.matKhau ? 
                <button className="btn-login">Sign In</button>
                  : <button disabled className="btn-no-login">Sign In</button>
              }
                </div>
                </Form>
            
      )
    }}/>
    
  );
};

export default Index;