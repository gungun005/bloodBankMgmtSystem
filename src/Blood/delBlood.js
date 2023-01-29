import React from "react";
import axios from "axios";

function DelBlood() {

    const callDelBloodAPI = async (delBlood) => {
        await axios.delete(`http://localhost:9000/bloodbank`, delBlood)
        .then((res) => {console.log(res)});
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        let userName = ((document.getElementsByName("userName__delBlood")||{})[0].value)||"";
        let userBlood = ((document.getElementsByName("userBlood__delBlood")||{})[0].value)||"";
        let userBloodUnits = ((document.getElementsByName("userBloodUnits__delBlood")||{})[0].value)||"";
        let userMob = ((document.getElementsByName("userMob__delBlood")||{})[0].value)||"";
        const delBlood = {
            userName,
            userBlood,
            userBloodUnits,
            userMob,
        };
        console.log(delBlood);
        callDelBloodAPI(delBlood);
    };

    return(
        <div>
            <h4> Delete blood </h4>
            <form id="delBlood" method="DELETE" onSubmit={onFormSubmit}>
                <label> Enter User Name :
                    <input type="text" name="userName__delBlood"/>     
                </label>
                <label> Enter User Blood :
                    <input type="text" name="userBlood__delBlood"/>     
                </label>
                <label> Enter User Blood Units :
                    <input type="text" name="userBloodUnits__delBlood"/>     
                </label>
                <label> Enter Mobile Number : 
                    <input type="text" name="mobNum__delBlood"/>
                    <input type="submit" style={{color : "blue", margin:"10px"}} value="Submit"/>
                </label>
            </form>
        </div>
    )
}

export default DelBlood;