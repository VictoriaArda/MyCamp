  import React from "react";
  import "../public/style.css"
  function Nav() {
      return ( <
          nav className = "navbar navbar-expand-lg navbar-light bg-light" >
 
          <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item active">
                      <a class="nav-link"  href="index.html">Home <span class="sr-only">(current)</span> <i class='fas fa-home'></i></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="login.html">Login <i class='fas fa-suitcase'></i></a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="signup.html">Sign Up <i class='fas fa-address-card'></i></a>
                  </li>
              </ul>
          </div>
      </nav>


      );
  }

  export default Nav;