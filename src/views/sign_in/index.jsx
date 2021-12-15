import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Index = () => {
    const [name, setName] = useState("")
    const [roomId, setRommId] = useState("")
    return (
        <div>
            <h1>Sign In</h1>
            <input type="text" placeholder='name' onChange={event => {
                setName(event.target.value)
            }} />
            <br/>
            <input type="text" placeholder='room id' onChange={event => {
                setRommId(event.target.value)
            }} />
            <NavLink to={`/chat?name=${name}&room=${roomId}`}>Join</NavLink>
        </div>
    );
};

export default Index;