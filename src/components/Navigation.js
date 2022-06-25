import React from "react";
import "./../css/Navigation.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

const Navigation = () =>{
    return(
        <div className="Navigation">
            <ul>
                <Link to="/"><li>Home</li></Link>
                
            </ul>
        </div>
    );
}

export default Navigation;