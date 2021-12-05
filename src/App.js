import { useState } from 'react';
import io from 'socket.io-client'
import Chat from './Chat';
const socket = io.connect("http://localhost:3001")
function App() {
  const [userName, setUserName] = useState("")
  const [roomId, setRoomId] = useState("")
  const joinRoom = () => {
    if(userName !== "" && roomId !== "") {
        socket.emit("join_room", roomId)
    }
  }
 
  return (
    <div className="App">
      <h3>Join A Chat</h3>
      <input type="text" placeholder="John..." onChange={(event) => {
          setUserName(event.target.value)
      }}/>
      <input type="text" placeholder="Room Id..." onChange={(event) => {
          setRoomId(event.target.value)
      }}/>
      <button onClick={joinRoom}>Join Room</button>
      <Chat socket={socket} userName={userName} roomId={roomId}/>
    </div>
  );
}

export default App;
