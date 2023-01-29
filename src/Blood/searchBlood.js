import React from "react";
import axios from "axios";

function SearchBlood() {

    const callSearchBloodAPI = async (searchBlood) => {
        await axios.delete(`http://localhost:9000/bloodbank`, searchBlood)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__searchBlood")||{})[0].value)||"";
        let userBlood = ((document.getElementsByName("userBlood__searchBlood")||{})[0].value)||"";
        let userBloodUnits = ((document.getElementsByName("userBloodUnits__searchBlood")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("userMob__searchBlood")||{})[0].value)||"";
        const searchBlood = {
            userName,
            userBlood,
            userBloodUnits,
            userMob,
        };
        console.log(searchBlood);
        callSearchBloodAPI(searchBlood);
    };

    return(
        <div>
            <h4> Add blood </h4>
            <form id="searchBlood" method="POST" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__searchBlood"/>     
                </label>
                <label> Enter User Blood Group :
                    <input type="text" name="userBlood__searchBlood"/>     
                </label>
                <label> Enter Blood Units :
                    <input type="text" name="userBloodUnits__searchBlood"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="userMob__searchBlood"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default SearchBlood;