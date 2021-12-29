import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import SignIn from './sign_in/index'
import SignUp from './sign_up/index'
const Index = () => {
  console.log(2)
  const sign = useLocation()
  return (
    <div>
        <div className="signin">
        <div className="signin_cover">
          <div className="signin_left">
            <div className="signin_left_cover">
            <div className="signin_left_content">
            <div className="signin_title">
                <h1>Chat<span> Seen</span> </h1>
                <span>Welcome to the website</span>
              </div>
              {sign.pathname === '/signup' ? <SignUp/> : <SignIn/>}
            </div>
            </div>
          </div>
          <div className="signin_img"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;