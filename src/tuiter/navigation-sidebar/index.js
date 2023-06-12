import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.css';

const NavigationSidebar = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    const list_of_icons = {
        "home": "fa fa-home fa-1x",
        "explore": "fa fa-hashtag fa-1x wd-white",
        "notifications": "fa fa-bell fa-1x",
        "messages": "fa fa-envelope fa-1x",
        "bookmarks": "fa fa-bookmark fa-1x",
        "lists": "fa fa-list-ul fa-1x",
        "profile": "fa fa-user fa-1x",
        "more": "fa fa-ellipsis-v fa-1x"
      };
      let icon = 'home' in list_of_icons;
    return (
        <div className="list-group">
            {links.map((link) =>
                <div>

                    
                    <Link to={`/tuiter/${link}`} className={`list-group-item flex text-capitalize ${active === link ? "active" : ""}`}>
                        <i class={list_of_icons[link]} margin="10px"></i>  <span className="d-none d-lg-inline">{link} </span>
                    </Link>
                </div>

            )}
        </div>
    );
};
export default NavigationSidebar;
//trying to add an icon 
//<i class="fa fa-home fa-1x" margin="10px"></i>