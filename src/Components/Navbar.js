import React from "react";
import {Link} from "react-router-dom";
function Navbar()
{
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div>
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
              <li className="nav-item">
              <Link to='/ContactUs' className="nav-link active" aria-current="page">Login</Link>
              </li>
              <li className="nav-item">
              <Link to='/SignUpForm' className="nav-link active" aria-current="page">Signup</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>
    )
}
export default Navbar;