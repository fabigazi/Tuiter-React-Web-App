import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits-v-two.json';

const tuitsVTwoSlice = createSlice({
    name: 'tuits',
    initialState: { tuits: tuits },
    reducers: {
        todoDoneToggle(state, action) {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.lieks = tuit.likes++;
        }

    }
});

export default tuitsVTwoSlice.reducer;