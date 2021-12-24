import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiPadlock } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
const Index = () => {
  const [name, setName] = useState("");
  const [roomId, setRommId] = useState("");
  return (
    <div className="signin">
      <div className="signin_cover">
        
        <div className="signin_left">
          <div className="signin_left_cover">
          <div className="signin_left_content">
            <div className="signin_title">
              <h1>USER LOGIN</h1>
              <span>Welcome to the website</span>
            </div>
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

            </div>
            <div className="login">
              <NavLink to={`/chat?name=${name}&room=${roomId}`}>LOGIN</NavLink>
              </div>
          </div>
          </div>
        </div>
        <div className="signin_img"></div>
      </div>
    </div>
  );
};

export default Index;