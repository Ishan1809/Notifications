import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareIcon from '@mui/icons-material/Share';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';


function Card({post}) {
    const[isLike,setLike] = useState(false);

    function handleLike(){
        setLike(!isLike)
    }
    return (
        <div className="card">
            <div className="info">
                <img src={post.userImg} alt="" className="userImg" />
                <span>{post.fullname}</span>
            </div>
            <img src={post.postImg} alt="" className="postImg" />
            <div className="interaction">
                { isLike ? (<FavoriteRoundedIcon className="cardIcon heart" onClick={handleLike} color="error" />) : (<FavoriteBorderIcon className="cardIcon heart" onClick={handleLike} / >)}
                <ChatBubbleOutlineOutlinedIcon className="cardIcon"/>
                <ShareIcon className="cardIcon heart"/>
                <InfoOutlinedIcon className="cardIcon infoIcon heart"/>
            </div>
        </div>
        
    );
};

export default Card