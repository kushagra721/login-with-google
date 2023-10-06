import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
//import { googleLogout } from "@react-oauth/google";

const ApiData = () => {
  var userdata = JSON.parse(localStorage.getItem("data"));
  console.log(userdata);

  const navigate=useNavigate();

   // const ID="704893233164-238rhlcvn9kqk33106t3pk61g4vt4cko.apps.googleusercontent.com";

    // const onSignoutSuccess = () => {

      
    //   alert("You have been logged out successfully");
    //   navigate("./")
     
    //  // localStorage.removeItem("data");

    // };


  

  return (
    <div>
      <Header name={userdata.email} />

      <div className="card" style={{ width: "18rem", margin: 15, padding: 2 }}>
        <img src={userdata.picture} class="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">User Details</h5>
          <p className="card-text">This is a google sign in Page</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">User name : {userdata.name}</li>
          <li className="list-group-item">User Email : {userdata.email}</li>
          <li className="list-group-item">
            family name : {userdata.family_name}
          </li>
          {/* <button  type="button" class="btn btn-primary" onClick={onSignoutSuccess}>Sign out</button> */}

         
        </ul>
      </div>
    </div>
  );
};

export default ApiData;
