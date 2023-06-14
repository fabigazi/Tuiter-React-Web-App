import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, profileThunk, updateUserThunk } from "../services/auth-thunks";


const authSlice = createSlice({
 name: "auth",
 initialState: { currentUser: null },
 reducers: {},
 extraReducers: {
   [loginThunk.fulfilled]: (state, action) => {
     state.currentUser = action.payload;
     state.loading = false;
     state.error = null;
   },
   [logoutThunk.fulfilled]: (state) => {
    state.currentUser = null;
    state.loading = false;
    state.error = null;
  },
  [profileThunk.fulfilled]: (state, action) => {
    state.currentUser = action.payload;
    state.loading = false;
    state.error = null;
  },
  [updateUserThunk.fulfilled]: (state, { payload }) => {
    state.currentUser = payload;
  },
  //[register.fulfilled]: (state, { payload }) => {},
 },
});
export default authSlice.reducer;