import React from "react";
// import Notification from "../../img/notification.svg"

function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">App</span>
      <div className="icons">
        <div className="icon">
            <img src="../../img/notification.svg" className="iconImg" alt="" />
            <div className="counter">1</div>
        </div>
        <div className="icon">
            <img src="../../img/message.svg" className="iconImg" alt="" />
            <div className="counter">1</div>
        </div>
        <div className="icon">
            <img src="../../img/settings.svg" className="iconImg" alt="" />
            <div className="counter">1</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
