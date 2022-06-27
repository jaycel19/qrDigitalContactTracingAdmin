import React from "react";
import "./../css/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({currentUser}) =>{
    return(
        <div className="Navigation">
            <ul>
                <li className="username">{currentUser.username}</li>
                <Link to="/"><li>Home</li></Link>
                <Link to="/reviewbydate"><li>Review by Date</li></Link>
            </ul>
        </div>
    );
}

export default Navigation;