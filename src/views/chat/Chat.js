import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";

let infor;
const ENDPOINT = /* "https://watch-app-chat.herokuapp.com/" */ "localhost:5000";
const socket = io(ENDPOINT, { transports: ["websocket"] });

const Chat = (props) => {
  const [message, setMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const location = useLocation();
  useEffect(() => {
    infor = queryString.parse(location.search);
    socket.emit("join", infor);
  }, [location.search]);

  useEffect(() => {
    socket.on("receiveMess", (data) => {
        setListMessage((list) => [...list, data]);
        console.log(listMessage);
    });
  }, [socket]);

  const send = async () => {
    if (message !== "") {
      const data = {
        mess: message,
        user: infor.name,
        room: infor.room,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      setListMessage((list) => [...list, data]);
      await socket.emit("send_message", data);
      setMessage("");
    }
  };
  return (
    <div>
      <h1>Chat</h1>
      <div>
        {listMessage.map((item, index) => {
          if (item.user !== queryString.parse(location.search).name)
            return <p key={index}>{item.mess}</p>;
          return (
            <p style={{ textAlign: "right", width: "15%" }}>{item.mess}</p>
          );
        })}
        <input
          value={message}
          type="text"
          placeholder="Something"
          onKeyPress={(event) => {
            event.key === "Enter" && send();
          }}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
