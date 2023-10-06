import React from 'react'
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const Header = (props) => {

    

  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">google Sign-in </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item">
          <a className="nav-link" href="#">{props.welcome} {props.name}</a>
        </li>
        
        
      </ul>

      
      
       
  

      

      
         
      
    
        
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header