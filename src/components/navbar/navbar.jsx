import React, { useEffect, useState } from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';


function Navbar({socket}) {

    const[notifications,setNotifications] = useState([])
    const[open,setOpen] = useState(false);


    useEffect(() => {
        socket.on("getNotification",(data) => {
            setNotifications((prev) => [...prev,data])
        })
    },[socket])

    console.log(notifications)

    const display = ({senderName,type}) => {
        let action;

        if(type === 1){
            action = "liked"
        }
        else if(type === 2){
            action = "commented"
        }
        else if(type === 3){
            action = "shared"
        }

        return (<div className="notification">
            {`${senderName} ${action} your post`}
        </div>)
    }

  return (
    <div className="navbar">
      <span className="logo">App</span>
      <div className="icons">
        <div className="icon" onClick={() => {
            setOpen(!open)
            {open && setNotifications([])}}}>
            <NotificationsIcon />
            {notifications.length > 0 && <div className="counter">{notifications.length}</div>}
        </div>
        <div className="icon">
            <EmailIcon />
        </div>
        <div className="icon">
            <SettingsIcon />
        </div>
      </div>
      {open && <div className="notifications">
        {notifications.map(n => display(n))}
      </div>}
    </div>
  );
}

export default Navbar;
