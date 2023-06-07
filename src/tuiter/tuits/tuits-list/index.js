import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitsList = () => {
  let { tuits } = useSelector(state => state.tuitsTwo)
 return(
   <ul className="list-group">
     {
       tuits.map(tuit =>
         <TuitItem
           key={tuit._id} tuit={tuit}/> )
     }
   </ul>
 );
};
export default TuitsList;