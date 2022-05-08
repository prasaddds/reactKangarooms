import React from "react";
import {Link} from "react-router-dom";
function Navbar()
{
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Kangarooms</a>
          {/* <Link to='/about' className="navbar-brand">Kangarooms</Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className="nav-link active" aria-current="page">About</Link>
              </li>
              <li className="nav-item">
              <Link to='/ContactUs' className="nav-link active" aria-current="page">Contact Us</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Fill me in
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a className="dropdown-item" href="kangarooms-Login.php">login</a></li>
                  <li><a className="dropdown-item" href="kangarooms-Signup.php">signup</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
    )
}
export default Navbar;