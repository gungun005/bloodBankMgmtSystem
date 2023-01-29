import React from "react";
import axios from "axios";

function AddBlood() {

    const callAddBloodAPI = async (addBlood) => {
        await axios.post(`http://localhost:9000/bloodbank`, addBlood)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__addBlood")||{})[0].value)||"";
        let userBlood = ((document.getElementsByName("userBlood__addBlood")||{})[0].value)||"";
        let userBloodUnits = ((document.getElementsByName("userBloodUnits__addBlood")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("userMob__addBlood")||{})[0].value)||"";
        const addBlood = {
            userName,
            userBlood,
            userBloodUnits,
            userMob,
        };
        console.log(addBlood);
        callAddBloodAPI(addBlood);
    };

    return(
        <div>
            <h4> Add blood </h4>
            <form id="addBlood" method="POST" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__addBlood"/>     
                </label>
                <label> Enter User Blood Group :
                    <input type="text" name="userBlood__addBlood"/>     
                </label>
                <label> Enter Blood Units :
                    <input type="text" name="userBloodUnits__addBlood"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="userMob__addBlood"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default AddBlood;