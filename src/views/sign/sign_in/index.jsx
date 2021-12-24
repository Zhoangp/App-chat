import React, { Fragment, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { Field, Form, Formik } from "formik";
import { signIn } from "../../../redux/actions/getInforUser";
const Index = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const submit = (values) => {
    dispatch(signIn(values, (name) => {
        history.push(`/chat?name=${name}`)
    }))
  }
  return (
    <Formik 
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
              </div>
              <div className="input">
                <Field
                  name="matKhau"
                  type="text"
                  placeholder="Password"
                  onChange={formikProps.handleChange}
                />
                <GiPadlock />
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox"/>
                  <label htmlFor="remember" className="lable">Remember</label>
                  <NavLink to="/signup">Sign Up</NavLink>
              </div>
              <div className="login">
                <button>LOGIN</button>
                </div>
                </Form>
            
      )
    }}/>
    
  );
};

export default Index;