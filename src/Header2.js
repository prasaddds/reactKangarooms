import React from "react";
function Header2()
{
    return (
        <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="">Kangarooms</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href={"Card.js"} target="_blank">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#" target="_blank">Contact us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" aria-current="page" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fill me in
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#" target="_blank">login</a></li>
                <li><a className="dropdown-item" href="#" target="_blank">signup</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</div>
    )
}
export default Header2;