import './index.css';
import { likedToggle } from '../../reducers/tuits-v-two-reducer';
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

function TuitStats({ tuit }) {
    const dispatch = useDispatch();
    const [likes, setLikes] = useState(tuit.likes);
    const [liked, setLiked] = useState(tuit.liked);
    const tuitLiked = (tuit) => {
        dispatch(likedToggle(tuit))
    }
    function liked2(){
        if(liked) {
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: !liked }))
            setLikes(likes - 1);
            
        } else {
            dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: !liked }))
            setLikes(likes + 1);
        }
        setLiked(!liked)
    }
    return (
        <div className="container">
            <div><a  class="clickable-icon no-underline"><i class="fa-regular fa-comment"></i> {tuit.replies} </a></div>
            <div><a  class="clickable-icon no-underline"><i class="fa-solid fa-retweet"></i> {tuit.retuits}</a></div>
            <div onClick={() => liked2()}>{liked ? (
              <a  class="clickable-icon no-underline"><i class="fa-solid fa-heart colorStyle" ></i></a>
            ) : (
                <a  class="clickable-icon no-underline"><i class="fa-regular fa-heart"></i></a>
            )} {likes}</div>
            <div><a  class="clickable-icon no-underline"><i class="fa-sharp fa-solid fa-arrow-up-from-bracket"></i></a> </div>
        </div>
    );
};
export default TuitStats;