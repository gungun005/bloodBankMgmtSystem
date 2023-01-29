import "./App.css";
import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import User from "./User/User";
import Blood from "./Blood/Blood";
import Header from "./Header";
import CreateUser from "./User/userCreate";
import DeleteUser from "./User/userDelete";
import SearchUser from "./User/userSearch";
import AllUser from "./User/usersAll";
import AddBlood from "./Blood/addBlood";
import AllBlood from "./Blood/allBlood";
import DelBlood from "./Blood/delBlood";
import SearchBlood from "./Blood/searchBlood";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center", color:"blue"}}> Blood Bank Management System</h1>
      <div className="App">
        <Switch>
          <Route exact path="/user/create"> <CreateUser/> </Route>
          <Route exact path="/user/delete"> <DeleteUser/> </Route>
          <Route exact path="/user/search"> <SearchUser/> </Route>
          <Route exact path="/user/all"> <AllUser/> </Route>
          <Route exact path="/user"> <User/> </Route>
          <Route exact path="/blood/add"> <AddBlood/> </Route>
          <Route exact path="/blood/search"> <SearchBlood/> </Route>
          <Route exact path="/blood/del"> <DelBlood/> </Route>
          <Route exact path="/blood/all"> <AllBlood/> </Route>
          <Route exact path="/blood"> <Blood/> </Route>
          <Route exact path="/"> <Header/> </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
