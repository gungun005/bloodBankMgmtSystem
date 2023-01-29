import React from "react";
import axios from "axios";

function SearchUser() {

    const callSearchUserAPI = async (searchUser) => {
        await axios.get(`http://localhost:9000/bloodbank`, searchUser)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__searchUser")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("mobNum__searchUser")||{})[0].value)||"";
        const searchUser = {
            userName,
            userMob
        };
        console.log(searchUser);
        callSearchUserAPI(searchUser);
    };

    return(
        <div>
            <h3>Search user</h3>
            <form id="searchUser" method="POST" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__searchUser"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="mobNum__searchUser"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default SearchUser;