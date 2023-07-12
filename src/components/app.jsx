import React, { useState } from "react";
import Navbar from "./navbar/navbar"
import Card from "./card/card"

const App = () => {

    const[username,setUsername] = useState("");
    const[user,setUser] = useState("abcd");
    // console.log(user)

  return (
  <div className="container">
  <h2>{user}</h2>
  { user ? (
    <>
    <Navbar />
    <Card />
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
