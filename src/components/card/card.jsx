import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareIcon from '@mui/icons-material/Share';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


function Card({post ,socket ,user}) {
    const[isLike,setLike] = useState(false);

    function handleLike(type){
        setLike(!isLike)
        socket.emit("sendNotification",{
            senderName:user,
            receiverName:post.username,
            type
        })
    }

    function handleNot(type){
        socket.emit("sendNotification",{
            senderName:user,
            receiverName:post.username,
            type
        })
    } 

    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                { isLike ? (<FavoriteRoundedIcon className="cardIcon heart" onClick={() => handleLike(4)} color="error" />) : (<FavoriteBorderIcon className="cardIcon heart" onClick={() => handleLike(1)} / >)}
                <ChatBubbleOutlineOutlinedIcon className="cardIcon" onClick={() => handleNot(2)} />
                <ShareIcon className="cardIcon heart" onClick={() => handleNot(3)} />
                <InfoOutlinedIcon className="cardIcon infoIcon heart"/>
            </div>
        </div>
        
    );
};

export default Card