import React from "react";
import "./User.css";
import { Link } from "react-router-dom";

function User() {
    return(
        <nav>
            <Link exact to="/user/create" className="user__button">
                Create User
            </Link>

            <Link exact to="/user/delete" className="user__button">
                Delete User
            </Link>

            <Link exact to="/user/all" className="user__button">
                All Users
            </Link>
            
            <Link exact to="/user/search" className="user__button">
                Search User
            </Link>
        </nav>
    )
}

export default User;