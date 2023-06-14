import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitsVTwoReducer from "./reducers/tuits-v-two-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import { Navigate } from "react-router-dom"
import LoginScreen from "./user/login-screen";
import authReducer from "./reducers/auth-reducer";
import RegisterScreen from "./user/register-screen";
import ProfileScreen from "./user/profile-screen";

const store = configureStore(
   { reducer: { who: whoReducer, tuits: tuitsReducer, tuitsTwo: tuitsVTwoReducer, user: authReducer } });

function Tuiter() {
   return (
      <Provider store={store}>
         <div>
            <Nav />
            <div className="row">
               <div className="col-2">
                  <NavigationSidebar />
               </div>
               <div className="col-7 min-width-500">
                  <Routes>
                     <Route path="/" element={<Navigate to="login" />} />
                     <Route path="/login" element={<LoginScreen />} />
                     <Route path="/register" element={<RegisterScreen />} />
                     <Route path="/profile" element={<ProfileScreen />} />
                     <Route path="/home" element={<HomeScreen />} />
                     <Route path="/explore" element={<ExploreScreen />} />
                     <Route path="/bookmarks" element={<BookmarksScreen />} />
                     <Route path="/profile" element={<ProfileScreen />} />
                  </Routes>
               </div>
               <div className="col-3 d-none d-lg-block">
                  <div className="min-width-400">
                     <WhoToFollowList />
                  </div>
               </div>
            </div>
         </div>
      </Provider>
   );
}
export default Tuiter;