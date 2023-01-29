import React from "react";
import axios from "axios";

function DeleteUser() {

    const callDeleteUserAPI = async (deleteUser) => {
        await axios.delete(`http://localhost:9000/bloodbank`, deleteUser)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__deleteUser")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("mobNum__deleteUser")||{})[0].value)||"";
        const deleteUser = {
            userName,
            userMob
        };
        console.log(deleteUser);
        callDeleteUserAPI(deleteUser);
    };

    return(
        <div>
            <h3>Delete user</h3>
            <form id="deleteUser" method="DELETE" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__deleteUser"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="mobNum__deleteUser"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default DeleteUser;