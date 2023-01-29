import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <nav>
                <Link exact to="/blood" style={{color:"red"}}>
                    <button className="header__button__red">  Blood Data </button>
                </Link>

                <Link exact to="/user" style={{color:"blue"}}>
                    <button className="header__button__green">  User Data </button>
                </Link>
            </nav>
        </div>
    )
}

export default Header;