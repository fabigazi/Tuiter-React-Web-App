import React from "react";
import { Link, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"];
    return (
        <div className="list-group">
            {links.map((link) =>
                <div>

                    <Link to={`/tuiter/${link}`} className={`list-group-item text-capitalize ${active === link ? "active" : ""}`}>
                        {link} 
                    </Link>
                </div>

            )}
        </div>
    );
};
export default NavigationSidebar;
//trying to add an icon 
//<i class="fa fa-home fa-1x" margin="10px"></i>