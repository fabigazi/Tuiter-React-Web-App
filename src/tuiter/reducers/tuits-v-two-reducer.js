import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits-v-two.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTt_o_VaKFc1EPrRoP4uP81ktzVnuwA_n8vA&usqp=CAU",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsVTwoSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        likedToggle(state, action) {
            const tuit = tuits.find((tuit) => tuit._id === action.payload._id)
            if (tuit.liked) {
                Object.assign({}, tuit.likes , tuit.likes--);
            } else {
                Object.assign({}, tuit.likes , tuit.likes++);
            }
            tuit.liked = !tuit.liked
            
        },

        createTuit(state, action) {
            state.tuits.unshift({
            ...action.payload,
            ...templateTuit,
            _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state.tuits
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.tuits.splice(index, 1);
          }, 
    }
});
export const {likedToggle, createTuit, deleteTuit} = tuitsVTwoSlice.actions
export default tuitsVTwoSlice.reducer;