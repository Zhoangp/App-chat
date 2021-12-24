import { Field, Form, Formik } from "formik";
import React, { Fragment } from "react";
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import {MdDriveFileRenameOutline} from 'react-icons/md'
import { NavLink } from "react-router-dom";

const Index = (props) => {
  return (
    <Formik
        initialValues={{ 
            taikhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "",
            maLoaiNguoiDung: "",
            hoTen: ""
        }
        }
      render={(formikProps) => {
        return (
          
          <Fragment>
            
            <div className="input">
              <Field  name="hoTen" placeholder="Name" type="text"/>
              <MdDriveFileRenameOutline/>
            </div>
            <div className="input"><Field  name="taikhoan" placeholder="Username" type="text"/>
                <IoMdPerson />

            </div>
              <div className="input"><Field  name="matKhau" placeholder="Password" type="password"/>
              <GiPadlock />
              
              </div>
              <div className="signin_q">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember" className="lable"> I agree</label>
                  <NavLink to="/">Sign In</NavLink>
              </div>
              <div className="login">
                <NavLink to={`/chat`}>SIGN UP</NavLink>
                </div>
          </Fragment>
        );
      }}
    />
  );
};

export default Index;
