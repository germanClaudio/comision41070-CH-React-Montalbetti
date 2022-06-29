import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = () => {

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/Inicio">
            <img src="./src/logoLaChauffer.png" alt="Logo La Chuaffer" width="150" height="70" title="Logo La Chauffer"/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/Inicio"><i className="fas fa-home me-1"></i> Home</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/Items"><i className="fas fa-air-freshener me-1"></i> Items</Link>
              </li>
              <li className="nav-item mx-5">
                <Link className="nav-link" to="/About"><i className="fas fa-user-friends me-1"></i> About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar