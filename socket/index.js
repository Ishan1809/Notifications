import { Server } from "socket.io";

const io = new Server({ 
    cors: "http://localhost:3000"
 });

 let onlineuser = []

 const addnewuser = (username,socketId) => {
    !onlineuser.some((user) => user.username === username) && onlineuser.push({username,socketId})
 }

  const removeuser = (socketId) => {
    onlineuser = onlineuser.filter(user => 
        user.socketId !== socketId)
  }

  const getuser = (username) =>{
    return onlineuser.find(user => user.username === username)
  }

io.on("connection", (socket) => {
  socket.on("newuser",username => {
    addnewuser(username,socket.id)
  });

  socket.on("sendNotification",({senderName,receiverName,type}) => {
    const receiver = getuser(receiverName);
    io.to(receiver.socketId).emit("getNotification" ,{
        senderName,
        type
    })
  })

  socket.on("disconnect", () =>{
    removeuser(socket.id);
  })
});

io.listen(5000);