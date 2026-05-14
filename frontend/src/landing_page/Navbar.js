import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <div className='mt-5 '> 
            <nav class="navbar navbar-expand-lg fixed-top shadow-sm nav" style={{backgroundColor:"#fff", height:"45px"}}>
             <div class="container">
               <Link class="navbar-brand" to="/">
                <img src='media/images/logo.svg' alt='Logo'
                style={{width:"18%", marginLeft:"8rem",}} />
               </Link>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
              
      <form class="d-flex" role="search">
        
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class="nav-item">
               <Link class="nav-link font " aria-current="page" to="/signup">Signup</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link font " to="/about">About</Link>
        </li>

         <li class="nav-item">
          <Link class="nav-link font" to="/product">Products</Link>
        </li>

         <li class="nav-item">
          <Link class="nav-link font" to="/pricing">Pricing</Link>
        </li>

         <li class="nav-item">
          <Link class="nav-link font" to="/support">Support</Link>
        </li>

         <li class="nav-item">
          <Link class="nav-link font" to="/"><i class="fa-solid fa-bars"></i></Link>
        </li>
      </ul>
      
      </form>
    </div>
    </div>
     </nav>
      </div>
    );
}

export default Navbar;