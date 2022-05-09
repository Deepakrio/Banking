import React from "react";
import './Styles/Navbar.css'
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";


export default function NavBar() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light navbar-fixed-top">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Dlithe Bank Inc</a> */}
    <Link to="home" className="navtitle">DlitheBank.Inc</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="nav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item pl-5 mt-3">
          <li className="nav-link active" aria-current="page"><Link to="home" className="navText">Home</Link></li> 
        </li>
        <li className="nav-item pl-5 mt-3">
        <li className="nav-link active" aria-current="page"><Link to="Invest" className="navText">Invest</Link></li> 
        </li>
        <li className="nav-item dropdown pl-5">
          <a className="nav-link dropdown-toggle"href="service" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           <span className="navText">Services</span>
          </a>
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
          <li className="nav-link active" aria-current="page"><Link to="mutual" className="navText">Mutual Funds</Link></li> 
          <li className="nav-link active" aria-current="page"><Link to="fd" className="navText">Fixed Deposit</Link></li> 
            <li><hr className="dropdown-divider"/></li>
            <li className="nav-link active" aria-current="page"><Link to="demat" className="navText">Demat</Link></li> 
          </ul>
        </li>
        <li className="nav-item pl-5 mt-3">
        <li className="nav-link active" aria-current="page"><Link to="passbook" className="navText">Passbook</Link></li> 
        </li>
        <li className="nav-item pl-5 mt-3">
        <li className="nav-link active" aria-current="page"><Link to="contact" className="navText">Contact</Link></li> 
        </li>
        {/* <button type="button" className="btn btn-primary"><Link to="create" className="navText"></Link>Create Account</button> */}
        
        <li className="nav-item pl-5 mt-3">
        <button type="button" className="btn btn-primary loginbtn"><li className="nav-link active" aria-current="page"><Link to="/" className="buttontxt">Log out</Link></li></button>
        </li>

        {/* <li className="nav-item pl-5 mt-3">
        <button type="button" className="btn btn-primary signupbtn"><li className="nav-link active" aria-current="page"><Link to="signup" className="buttontxt">Sign up</Link></li></button>
        </li> */}

      </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
