import React from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';


function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">App</span>
      <div className="icons">
        <div className="icon">
            <NotificationsIcon />
            <div className="counter">1</div>
        </div>
        <div className="icon">
            <EmailIcon />
            <div className="counter">1</div>
        </div>
        <div className="icon">
            <SettingsIcon />
            <div className="counter">1</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
