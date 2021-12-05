import React, { useEffect, useState } from 'react';

const Chat = (props) => {
    const [currentMessage, setCurrentMessage] = useState("")
    const [messageList, setMessageList] = useState([])
    const sendMessage = async () => {
        if(currentMessage !== "") {
            const messData = {
                room: props.roomId,
                author: props.userName,
                mess: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

            }
            setMessageList((list) =>  [...list, messData])
            await props.socket.emit("send_message", messData)
            setCurrentMessage("")
        }
    }
    useEffect(() => {
        props.socket.on("receive_message", (data) => {
            setMessageList((list) =>  [...list, data])
        })
      }, [props.socket])
    return (
        <div>
            <div className="chat-header">
                <h3>Live Chat</h3>
            </div>
            <div className="chat-body" style={{width: "15%"}}>
                {messageList.map((data) => {
                    if(data.author !== props.userName)
                        return <p>{data.mess}</p>
                    return <p style={{textAlign: "right"}}>{data.mess}</p>
                })}
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="Aa" 
                       value={currentMessage}
                    onChange={(event) => {
                        setCurrentMessage(event.target.value)
                }}
                    onKeyPress={(event) => {
                        event.key === "Enter" && sendMessage()
                    }}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;