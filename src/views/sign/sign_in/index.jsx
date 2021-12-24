import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { Formik } from "formik";
const Index = () => {
  const [name, setName] = useState("");
  const [roomId, setRommId] = useState("");
  return (
    <Formik render={formikProps => {
      return (
            <Fragment>
             
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <IoMdPerson />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Password"
                  onChange={(event) => {
                    setRommId(event.target.value);
                  }}
                />
                <GiPadlock />
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember" className="lable">Remember</label>
                  <NavLink to="/signup">Sign Up</NavLink>
              </div>
              <div className="login">
                <NavLink to={`/chat?name=${name}&room=${roomId}`}>LOGIN</NavLink>
                </div>
                </Fragment>
            
      )
    }}/>
    
  );
};

export default Index;