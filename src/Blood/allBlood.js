import React, { useEffect } from "react";
import axios from "axios";

function AllBlood() {

    const callGetAllBloodAPI = async() => {
        await axios.delete(`http://localhost:9000/bloodbank`)
        .then((res) => {console.log(res)});
    };

    useEffect(()=>{
        callGetAllBloodAPI();
    },[]);

    return(
        <div>
            <h4> All blood </h4>
        </div>
    )
}

export default AllBlood;