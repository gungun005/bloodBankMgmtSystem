import React from "react";
import "./Blood.css";
import { Link } from "react-router-dom";

function Blood() {

    return(
        <div>
            <nav>
                <Link exact to="/blood/add" className="blood__button">
                    Add Blood 
                </Link>

                <Link exact to="/blood/del" className="blood__button">
                    Delete Blood
                </Link>

                <Link exact to="/blood/search" className="blood__button">
                    Search Blood
                </Link>

                <Link exact to="/blood/all" className="blood__button">
                    All Blood
                </Link>
            </nav>
        </div>
    )
}

export default Blood;