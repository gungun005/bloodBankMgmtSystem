import React, { useEffect } from "react";
import axios from "axios";

function AllUser() {

    const callGetALLUserAPI = async () => {
        await axios.post(`http://localhost:9000/bloodbank`)
        .then((res) => {console.log(res)});
    };

    useEffect(()=>{
        callGetALLUserAPI();
    },[])

    return(
        <div>
            <h3>All users</h3>
        </div>
    )
}

export default AllUser;