import { Field, Form, Formik } from "formik";
import React from "react";

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
          <Form>
            <div className="input">
              <Field  name="hoTen" placeholder="Name" type="text"/>
              <Field  name="taikhoan" placeholder="Username" type="text"/>
              <Field  name="matKhau" placeholder="Password" type="password"/>
              <Field  name="email" placeholder="Email" type="email"/>
            </div>
            <button>Sign Up</button>
          </Form>
        );
      }}
    />
  );
};

export default Index;
