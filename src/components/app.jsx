import React, { useEffect, useState } from "react";
import Navbar from "./navbar/navbar"
import Card from "./card/card"
import { posts } from "../data";
import { io } from "socket.io-client";

const App = () => {

    const[username,setUsername] = useState("");
    const[user,setUser] = useState("");
    const[socket,setSocket] = useState(null);
    useEffect(() => {
        setSocket(io("http://localhost:5000"));
    },[]);

    useEffect(() => {
        socket?.emit("newuser",user)
    },[socket,user]);

  return (
  <div className="container">
  <p className="username">{user}</p>
  { user ? (
    <>
    <Navbar socket={socket}/>
    {posts.map((post) => (
        <Card key={post.id} post={post} socket={socket} user={user}/>
  ))}
    </>
  ) : (

    <div className="login">
      <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} value={username} />
      <button onClick={()=>setUser(username)}>Login</button>
    </div>
  )}
  </div>);
};

export default App;
