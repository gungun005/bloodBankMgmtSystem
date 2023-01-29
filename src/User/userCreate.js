import axios from "axios";
import React from "react";

function CreateUser() {

    const callCreateUserAPI = async (createUser) => {
        await axios.post(`http://localhost:9000/bloodbank`, createUser)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__createUser")||{})[0].value)||"";
        let userAdd = ((document.getElementsByName("userAdd__createUser")||{})[0].value)||"";
        let userMail = ((document.getElementsByName("userEmail__createUser")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("mobNum__createUser")||{})[0].value)||"";
        const createUser = {
            userName,
            userAdd,
            userMob,
            userMail
        };
        console.log(createUser);
        callCreateUserAPI(createUser);
    };

    return(
        <div>
            <h3>Create user</h3>
            <form id="createUser" method="POST" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__createUser"/>     
                </label>
                <label> Enter Address :
                    <input type="text" name="userAdd__createUser"/>     
                </label>
                <label> Enter Email :
                    <input type="text" name="userEmail__createUser"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="mobNum__createUser"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default CreateUser;