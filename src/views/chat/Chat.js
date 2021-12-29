import React, { Fragment, useEffect, useRef, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import {RiSendPlaneFill} from 'react-icons/ri'
import { useSelector } from "react-redux";

let infor;
const ENDPOINT = "https://watch-app-chat.herokuapp.com/"
const socket = io(ENDPOINT, { transports: ["websocket"] });

const Chat = (props) => {
  const {information} = useSelector(state => state.UserReducer)
  console.log(1)
  const messagesEndRef = useRef(null)
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const location = useLocation();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(() => {
    infor = queryString.parse(location.search);
    socket.emit("join", infor);
  }, [location.search]);

  useEffect(() => {
    socket.on("receiveMess", (data) => {
      scrollToBottom()
        setListMessage((list) => [...list, data]);
    });
  }, [socket]);

  const send = async () => {

    if (message !== "") {
      const data = {
        mess: message,
        user: infor.name,
        room: infor.room || 1,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setListMessage((list) => [...list, data]);
      await socket.emit("send_message", data);
      console.log(listMessage);
      setMessage("");
      scrollToBottom()
      
    }
  };
  return (
    <div className="chat-cover">
      <div className="chat-side">
      </div>
      <div className="chat">
        <div className="chat-infor-title">
          <h2>
        {information.hoTen}
        </h2>
        </div>
        <div className="chat-content">
        {listMessage.map((item, index) => {
          if (item.user !== queryString.parse(location.search).name)
            return <div className="chat-left"><p key={index}>{item.mess}</p></div>;
          return (
            <div className="chat-right">
            <p style={{ textAlign: "right" }}>{item.mess}</p>
            </div>
          );
        })}
        <div ref={messagesEndRef}/>
        </div>
        <div className="chat-input">
        <div className="input-mess">
        <input
          value={message}
          type="text"
          placeholder="Aa"
          onKeyPress={(event) => {
            event.key === "Enter" && send();
          }}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={send}><RiSendPlaneFill /></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
