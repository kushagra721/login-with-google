import React from 'react'
import { useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import "./loginpage.css"
import { useNavigate } from "react-router-dom";
import ApiData from './ApiData';
import Header from './Header';

 


const LoginPage = () => {


  const navigate = useNavigate();

    const ID="704893233164-238rhlcvn9kqk33106t3pk61g4vt4cko.apps.googleusercontent.com";
    // const [showloginButton, setShowloginButton] = useState(true);
    // const [showlogoutButton, setShowlogoutButton] = useState(false);
    // const onLoginSuccess = (res) => {
    //     console.log('Login Success:', res.profileObj);
    //     setShowloginButton(false);
    //     setShowlogoutButton(true);
    // };

    // const onLoginFailure = (res) => {
    //     console.log('Login Failed:', res);
    // };

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };



  return (
//     <div>
//     { showloginButton ?
//         <GoogleLogin
//             clientId={ID}
//             buttonText="Sign In"
//             onSuccess={onLoginSuccess}
//             onFailure={onLoginFailure}
//             cookiePolicy={'single_host_origin'}
//             isSignedIn={true}
//         /> : null}

//     { showlogoutButton ?
//         <GoogleLogout
//             clientId={ID}
//             buttonText="Sign Out"
//             onLogoutSuccess={onSignoutSuccess}
//         >
//         </GoogleLogout> : null
//     }
// </div>
<>
<Header  name=""/>

<div className="container1">
    <div className='container2'>
    <h1>Sign In</h1>
    <p>Sign in to your account</p>


<div class="mb-3 my-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

<label for="inputPassword5" class="form-label">Password</label>
<input type="password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock"/>
<div id="passwordHelpBlock" class="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>
<div id="passwordHelpBlock" class="form-text my-2" style={{color:"blue"}}>
  Forgot password?
</div>
<button type="button" class="btn btn-secondary my-3" >Sign In</button>
<GoogleOAuthProvider style={{}} clientId={ID}>
<GoogleLogin
  onSuccess={credentialResponse => {
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    localStorage.setItem("data",JSON.stringify(decoded));
    navigate("./userData");

    ;
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
</GoogleOAuthProvider>

</div>
</div>
</>

  )
}

export default LoginPage